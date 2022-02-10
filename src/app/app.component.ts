import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '531--esercizio-ngfor-save-list-and-save-button-Tommi022';

  list: string[] = ['ciao', 'come', 'stai']
  testo: string=""
  constructor(){}

  onClick(){
    this.list.push(this.testo)
  }
}
