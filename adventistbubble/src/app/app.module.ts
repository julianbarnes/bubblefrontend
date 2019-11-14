import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-list/event-detail/event-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventCardComponent } from './event-list/event-card/event-card.component';
import { ReactiveFormsModule } from '@angular/forms'
//Angular Material
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule,  } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventInputComponent } from './event-list/event-input/event-input.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventCardComponent,
    NavBarComponent,
    EventCardComponent,
    EventInputComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
