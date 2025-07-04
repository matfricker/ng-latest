import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment.development';

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

  customers: Customer[] = [];
  isVisible: boolean = true;

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.isVisible = true;
  }

  addItem(): void {
    console.log('Add item clicked...');

    let count = this.listItem?.length;

    if (this.listItem) {
      console.log(this.listItem);
      this.data.push(`${this.listItem} (${count} chars)`);
      this.listItem = null
    }
  }

  // move to service
  getCustomers(): void {
    const apiUrl = environment.apiUrl;
    this.HttpClient.get<Customer[]>(apiUrl)
      .subscribe((result) => this.customers = result);

    // hide button
    this.isVisible = false;
  }
}

export class Customer {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
}
