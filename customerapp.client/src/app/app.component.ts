import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private data: CustomerService) { }

  ngOnInit() {
    console.log(this.data.customers);
    this.data.getAllCustomers();
  }

  title = 'Customer App Dashboard';
}
