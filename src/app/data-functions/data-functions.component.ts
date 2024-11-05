import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';

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

  constructor(
    private HttpClient: HttpClient
  ) { }

  addItem(): void {
    console.log('Add item clicked...');

    let count = this.listItem?.length;

    if (this.listItem) {
      console.log(this.listItem);
      this.data.push(`${this.listItem} (${count} chars)`);
      this.listItem = null
    }
  }

  clickButton(): void {
    this.getCustomers().subscribe((result) => this.customers = result);
  }

  // move to service
  private getCustomers(): Observable<Customer[]> {
    return this.HttpClient.get<Customer[]>('https://api.fricker.io/customers')
      .pipe(
        catchError((err) => {
          return throwError(() => Error(err as string));
        })
      );

    // this.HttpClient.get('https://api.fricker.io/customers').subscribe((result) => {
    //   console.log(result);
    // });
  }
}

export class Customer {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
}
