import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.execute(this.onSuccess, this.onFailure);
    
  }

  //execute(success: Function, failure: Function) {
  //  try {
  //    throw new DOMException();
  //    success();
  //  } catch (ex) {
  //    failure();
  //  }
  //}

  //onSuccess() {
  //  console.log("success");
  //  // when successful, do this
  //}

  //onFailure() {
  //  console.log("failed");
  //  // on failure, do this
  //}


  title = 'Customer App Dashboard';

}
