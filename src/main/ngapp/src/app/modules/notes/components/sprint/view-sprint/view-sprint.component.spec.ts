import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSprintComponent } from './view-sprint.component';

describe('SprintComponent', () => {
  let component: ViewSprintComponent;
  let fixture: ComponentFixture<ViewSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
