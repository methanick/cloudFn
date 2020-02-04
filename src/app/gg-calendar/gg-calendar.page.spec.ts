import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GgCalendarPage } from './gg-calendar.page';

describe('GgCalendarPage', () => {
  let component: GgCalendarPage;
  let fixture: ComponentFixture<GgCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GgCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
