import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspecialComponent } from './ospecial.component';

describe('OspecialComponent', () => {
  let component: OspecialComponent;
  let fixture: ComponentFixture<OspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
