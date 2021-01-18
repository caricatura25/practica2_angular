import { Component, OnInit } from '@angular/core';
import { Cards } from './interfaces/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  public color = 'red';
  public cards:Array<Cards>= []
  ngOnInit(): void {
    this.cards=[{
    'titulo':'imagen1',
    'subtitulo':'descripcion',
    'imagen':''  
    },
    {
    'titulo':'imagen2',
    'subtitulo':'descripcion',
    'imagen':''
    }]
  }
}
