import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get<Customer[]>("/api/Customers");
  }

  getCustomerById(id: number) {
    // return a single customer
  }

  createCustomer(cust: Customer) {

  }

  updateCustomer(id: number, cust: Customer) {

  }

  deleteCustomer(id: number) {

  }
}
