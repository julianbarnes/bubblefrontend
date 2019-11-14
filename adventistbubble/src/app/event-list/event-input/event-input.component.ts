import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.scss']
})
export class EventInputComponent implements OnInit {
  public title: FormControl
  public description: FormControl
  public picture: FormControl
  public eventForm: FormGroup
  progress = 0
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.title = new FormControl('')
    this.description = new FormControl('')
    this.picture = new FormControl('')
    this.eventForm = new FormGroup({
      title: this.title,
      description: this.description,
      picture: this.picture
    })
    console.log(this.eventForm)
  }

  submit() {
    
    this.http.post('http://localhost:8000/events/add', this.toFormData(this.eventForm.value), {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log("Submitted")
      if ( event.type === HttpEventType.UploadProgress ) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      }
      if ( event.type === HttpEventType.Response ) {
        console.log(event.body);
        this.eventForm.reset();
      }
    });
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();

    for( const key of Object.keys(formValue)) {
      const value = formValue[key]
      formData.append(key,value)
    }
    return formData;
  }

}
