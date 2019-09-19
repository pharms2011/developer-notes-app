import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBugComponent } from './view-bug.component';

describe('BugComponent', () => {
  let component: ViewBugComponent;
  let fixture: ComponentFixture<ViewBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
