import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBugsComponent } from './view-bugs.component';

describe('BugsComponent', () => {
  let component: ViewBugsComponent;
  let fixture: ComponentFixture<ViewBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
