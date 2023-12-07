import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-functions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-functions.component.html',
  styleUrl: './data-functions.component.css'
})
export class DataFunctionsComponent {
  data: string[] = [];
  listItem: string | null = null;

  addItem(): void {
    console.log('Add item clicked...');
    if (this.listItem) {
      console.log(this.listItem);
      this.data.push(this.listItem);
      this.listItem = null
    }
  }
}
