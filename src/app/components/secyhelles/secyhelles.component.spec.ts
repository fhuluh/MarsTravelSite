import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecyhellesComponent } from './secyhelles.component';

describe('SecyhellesComponent', () => {
  let component: SecyhellesComponent;
  let fixture: ComponentFixture<SecyhellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecyhellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecyhellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
