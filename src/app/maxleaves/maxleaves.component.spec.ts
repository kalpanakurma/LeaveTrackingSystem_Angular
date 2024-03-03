import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxleavesComponent } from './maxleaves.component';

describe('MaxleavesComponent', () => {
  let component: MaxleavesComponent;
  let fixture: ComponentFixture<MaxleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
