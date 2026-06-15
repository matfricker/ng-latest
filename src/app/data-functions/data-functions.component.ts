import { HttpClient } from '@angular/common/http';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-data-functions',
    imports: [FormsModule],
    templateUrl: './data-functions.component.html',
    styleUrl: './data-functions.component.css'
})
export class DataFunctionsComponent {
  data: string[] = [];
  listItem: string | null = null;
  customers: WritableSignal<Customer[]> = signal([]);
  customerError: WritableSignal<string | null> = signal(null);
  hasError: WritableSignal<boolean> = signal(false);
  isVisible: WritableSignal<boolean> = signal(true);

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.isVisible.set(true);
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
      .pipe(
        catchError((error) => {
          this.customerError.set('Unable to load customers. Please try again later.');
          this.hasError.set(true);
          return of([]);
        }
      ))
      .subscribe((result: Customer[]) => {
        this.customers.set(result);
      });

    // hide button
    this.isVisible.set(false);
  }
}

export class Customer {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
}
