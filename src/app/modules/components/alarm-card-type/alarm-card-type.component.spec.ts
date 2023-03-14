import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmCardTypeComponent } from './alarm-card-type.component';

describe('AlarmCardTypeComponent', () => {
  let component: AlarmCardTypeComponent;
  let fixture: ComponentFixture<AlarmCardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmCardTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
