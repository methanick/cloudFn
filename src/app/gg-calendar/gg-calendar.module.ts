import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GgCalendarPageRoutingModule } from './gg-calendar-routing.module';

import { GgCalendarPage } from './gg-calendar.page';
import { CalendarComponent } from '../calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GgCalendarPageRoutingModule
  ],
  declarations: [
    GgCalendarPage,
    CalendarComponent
  ]
})
export class GgCalendarPageModule {}
