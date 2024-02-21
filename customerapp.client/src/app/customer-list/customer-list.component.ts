import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private data: CustomerService) {

  }

  ngOnInit() {
    this.data.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  onGetAll(data: Customer[]) {
    this.customers = data;
  }
}
