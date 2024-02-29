// model for a customer in typscript
export interface Customer {
  customerID: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  phoneNumbers: Phone[];
  emails: any[];
  addresses: any[];
}

export interface Phone {
  phoneId: number;
  phoneNumber: string;
}
