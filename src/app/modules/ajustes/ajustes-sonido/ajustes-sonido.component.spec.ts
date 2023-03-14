import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesSonidoComponent } from './ajustes-sonido.component';

describe('AjustesSonidoComponent', () => {
  let component: AjustesSonidoComponent;
  let fixture: ComponentFixture<AjustesSonidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesSonidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustesSonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
