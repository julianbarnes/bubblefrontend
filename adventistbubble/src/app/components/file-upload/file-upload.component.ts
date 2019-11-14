import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements ControlValueAccessor{

  @Input() progress;
  onChange: Function
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file)
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null) {
    this.host.nativeElement.value = ''
    this.file = null;
  }

  registerOnChange( fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

}
