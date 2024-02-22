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
    // return a single customer /api/Customers/5
    return this.http.get<Customer>("/api/Customers/" + id);
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
