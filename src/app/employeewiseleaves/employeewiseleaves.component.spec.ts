import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeewiseleavesComponent } from './employeewiseleaves.component';

describe('EmployeewiseleavesComponent', () => {
  let component: EmployeewiseleavesComponent;
  let fixture: ComponentFixture<EmployeewiseleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeewiseleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeewiseleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
