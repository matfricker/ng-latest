import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent {
  name = new FormControl('');

  updateName(): void {
    this.name.setValue('Vanessa');
  }
}
