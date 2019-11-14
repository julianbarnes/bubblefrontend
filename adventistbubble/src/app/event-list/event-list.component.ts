import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public events: Array<string>
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.events = ["Event1", "Event2"]
    this.eventService.getEvents().subscribe(result => {
      this.events = result;
      console.log(result)
    })
  }

}
