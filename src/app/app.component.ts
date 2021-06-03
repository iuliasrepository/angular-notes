import { Component } from '@angular/core';
import { DataService, INote } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  notes: INote[] = []

  nTitle: string = ''
  nText: string = ''

  constructor(private dataService: DataService) {
    this.notes = dataService.notes
  }

  add(){
    this.dataService.addNote( this.nTitle, this.nText)
    this.nTitle = ''
    this.nText = ''
  }

}


