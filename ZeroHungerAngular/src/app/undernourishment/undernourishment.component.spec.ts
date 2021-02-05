import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndernourishmentComponent } from './undernourishment.component';

describe('UndernourishmentComponent', () => {
  let component: UndernourishmentComponent;
  let fixture: ComponentFixture<UndernourishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndernourishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndernourishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
