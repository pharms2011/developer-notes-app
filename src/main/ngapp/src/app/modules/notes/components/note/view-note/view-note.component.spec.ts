import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteComponent } from './view-note.component';

describe('NoteComponent', () => {
  let component: ViewNoteComponent;
  let fixture: ComponentFixture<ViewNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
