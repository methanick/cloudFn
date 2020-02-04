import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GgCalendarPage } from './gg-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: GgCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GgCalendarPageRoutingModule {}
