import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {
      customerID: 0,
      firstName: "Jesse",
      lastName: "Harlan",
      birthdate: new Date(),
      phoneNumbers: [],
      emails: [],
      addresses: []
    },
    {
      customerID: 1,
      firstName: "Sarah",
      lastName: "Harlan",
      birthdate: new Date(),
      phoneNumbers: [],
      emails: [],
      addresses: []
    }
  ];

  constructor() { }

  getAllCustomers() {
    return this.customers;
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
