import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from '../name-editor/name-editor.component';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule, NameEditorComponent],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  word: string = 'random';

  fire(): void {
    this.word = '&#128293';
    console.log('fire in the house');
  }

  splash(): void {
    this.word = 'random';
  }
}
