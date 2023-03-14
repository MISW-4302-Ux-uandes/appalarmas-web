import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesTemaComponent } from './ajustes-tema.component';

describe('AjustesTemaComponent', () => {
  let component: AjustesTemaComponent;
  let fixture: ComponentFixture<AjustesTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustesTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
