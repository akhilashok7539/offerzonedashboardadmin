import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProPicComponent } from './edit-pro-pic.component';

describe('EditProPicComponent', () => {
  let component: EditProPicComponent;
  let fixture: ComponentFixture<EditProPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
