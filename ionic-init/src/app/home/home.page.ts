import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text='Ceci est un texte par default';

  constructor() {}

  onChangeText() {
    this.text = 'Nouveau Texte !';
  }
}
