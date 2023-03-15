import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditFormComponent } from './categoria-edit-form.component';

describe('CategoriaEditFormComponent', () => {
  let component: CategoriaEditFormComponent;
  let fixture: ComponentFixture<CategoriaEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
