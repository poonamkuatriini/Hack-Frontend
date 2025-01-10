import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrganiserEventComponent } from './components/organiser-event/organiser-event.component';
import { VolunteerListComponent } from './components/volunteer-list/volunteer-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChromePageComponent } from './components/chrome-page/chrome-page.component';

const routes: Routes = [{
  path: "login", component: LoginComponent, pathMatch: "full", data: {
    title: 'Login'
  },

},
{
  path: "event", component: OrganiserEventComponent, pathMatch: "full", data: {
  },

},
{
  path: "volunteer-list", component: VolunteerListComponent, pathMatch: "full", data: {
  },

},
{
  path: "user-profile", component: ProfileComponent,

},{
  path: "home", component: ChromePageComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
