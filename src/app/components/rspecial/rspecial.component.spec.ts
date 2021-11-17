import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspecialComponent } from './rspecial.component';

describe('RspecialComponent', () => {
  let component: RspecialComponent;
  let fixture: ComponentFixture<RspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
