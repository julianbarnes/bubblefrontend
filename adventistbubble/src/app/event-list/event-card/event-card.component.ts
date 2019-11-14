import {Component, Input, OnInit} from '@angular/core';
import { Event } from '../../interfaces/Event'
/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() event: Event

  ngOnInit() {

  }

}
