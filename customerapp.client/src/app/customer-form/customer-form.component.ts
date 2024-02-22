import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  customerForm: FormGroup = this.fb.group({
    customerID: [0],
    firstName: ['John'],
    lastName: ['Doe'],
    birthdate: [new Date()],
    phoneNumbers: this.fb.array([]),
    emails: this.fb.array([]),
    addresses: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {

  }

}
