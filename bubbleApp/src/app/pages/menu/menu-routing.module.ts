import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'events', loadChildren: '../events/events.module#EventsPageModule'
      },
      {
        path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
