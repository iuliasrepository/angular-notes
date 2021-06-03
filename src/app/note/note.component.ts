import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  template: `<div class='note-container'>
                <h2>
                  {{ title }}
                </h2>
                {{ text }}
            </div>`,
  styleUrls: ['./note.component.css']
})

export class NoteComponent {

  title: string = ''
  text: string = ''


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let currentNote = this.dataService.getNoteData(Number(params['id']))
      if (currentNote) {
        this.title = currentNote?.title || '(default title)'
        this.text = currentNote?.text || '(default text)'
      } else {
        this.router.navigate(['note','1'])
      }


    });
  }


}
