import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MauritiusComponent } from './mauritius.component';

describe('MauritiusComponent', () => {
  let component: MauritiusComponent;
  let fixture: ComponentFixture<MauritiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MauritiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MauritiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
