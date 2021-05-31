import { Component, OnInit } from '@angular/core';
import {faTimes,faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.css']
})
export class StickyNotesComponent implements OnInit {
  notes : Note[] = [];
  colors: string[] = ['#98ff9a','#ffb8b8','#bbe9ff','#e2a2ff','#ffc981']
  editable:boolean = false;
  faTimes = faTimes;
  faPlus = faPlus
  constructor() { }

  ngOnInit(): void {
    this.loadNotes()
  }

  changeMode():void{
    if(this.editable)
      this.saveNotes();
    this.editable= !this.editable;

  }

  addNote():void{
    this.notes.push({title:'Set title...',text:'Set text...',color: this.colors[Math.floor(Math.random() * this.colors.length)]})
  }

  removeNote(index:number): void {
    this.notes.splice(index,1);
  }

  saveNotes():void{
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  loadNotes():void{
    let notesJSON  =  localStorage.getItem('notes');
    if(notesJSON!=null)
      this.notes = JSON.parse(notesJSON)
  }

  updateTitle(note: any, $event: Event) {
    note.title = ($event.target as HTMLInputElement).innerText;
  }


  updateText(note: any, $event: Event) {
    note.text = ($event.target as HTMLInputElement).innerText;
  }
}

interface Note {
  title: string;
  text: string;
  color:string;
}
