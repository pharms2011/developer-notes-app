import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from './modules/common/common.module';
import {DevNotesModule} from './modules/notes/dev.notes.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDatepickerModule, MatIconModule, MatNativeDateModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CreateSprintComponent} from './modules/notes/components/sprint/create-sprint/create-sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DevNotesModule,
    StoreModule.forRoot({}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
