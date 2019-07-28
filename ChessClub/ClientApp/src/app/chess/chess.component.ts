import { Component } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html'
})
export class ChessComponent {
  chess = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/smiles.png'
  }
}
