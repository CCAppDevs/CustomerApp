import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  customer$: Subject<Customer> = new Subject<Customer>();

  constructor(private http: HttpClient) {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.http.get<Customer[]>("/api/Customers").subscribe(data => {
      this.customers$.next(data);
    });
  }

  getCustomerById(id: number) {
    // return a single customer /api/Customers/5
    this.http.get<Customer>("/api/Customers/" + id).subscribe(data => {
      this.customer$.next(data);
    });
  }

  createCustomer(cust: Customer) {
    //post
    return this.http.post<Customer>("/api/Customers", cust);
  }

  updateCustomer(id: number, cust: Customer) {
    //put
    return this.http.put<Customer>("/api/Customers/" + id, cust);
  }

  deleteCustomer(id: number) {
    // delete
    this.http.delete<any>("/api/Customers/" + id);
  }
}
