import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import database from '../../config/database.config.json'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  /**
   * @function getEvents
   * @descriptions retrieve events posted in the database
   */

   getEvents(): Observable<any> {
     let url = "http://"+database.host+":"+database.port+"/events"
    return this.httpClient.get(url)
   }
}
