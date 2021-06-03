import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

import {DataService} from './data.service';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: 'note/:id', component:NoteComponent
  },
  {
    path: '**', redirectTo: 'note/1'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
