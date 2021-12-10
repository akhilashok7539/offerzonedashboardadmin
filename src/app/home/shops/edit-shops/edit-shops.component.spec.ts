import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopsComponent } from './edit-shops.component';

describe('EditShopsComponent', () => {
  let component: EditShopsComponent;
  let fixture: ComponentFixture<EditShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
