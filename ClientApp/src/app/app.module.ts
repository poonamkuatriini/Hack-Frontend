import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OrganiserEventComponent } from './components/organiser-event/organiser-event.component';
import { VolunteerListComponent } from './components/volunteer-list/volunteer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChromePageComponent } from './components/chrome-page/chrome-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganiserEventComponent,
    VolunteerListComponent,
    ChromePageComponent,
    ProfileComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
