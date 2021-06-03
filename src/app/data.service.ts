import { Injectable } from '@angular/core';

export interface INote {
  id: number,
  title: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _notes: INote[] = [
    {
      id: 1,
      title: 'Заметка 1',
      text: 'Текст первой заметки'
    },
    {
      id: 2,
      title: 'Заметка 2',
      text: 'Текст второй заметки'
    },
    {
      id: 3,
      title: 'Заметка 3',
      text: 'Текст третьей заметки'
    },
    {
      id: 4,
      title: 'Заметка 4',
      text: 'Текст четвертой заметки'
    }
  ];

  getNoteData (id:number):INote|undefined {
    return this.notes.find((el: INote) => el.id === id)
  }

  get notes(): INote[]{
    return this._notes
  }

  private get nextId (): number {
    return this._notes[this._notes.length-1]['id']+1
  }

  addNote(title:string = "Default note title", text:string = "Default note text"): void {
    this._notes.push({
      id: this.nextId,
      title,
      text
    })
  }

}
