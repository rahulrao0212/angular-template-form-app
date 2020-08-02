import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulat-template-form-app';

  contact: contact = {
    firstname: "Sachin",
    lastname: "Tendulkar",
    email: "sachin@gmail.com",
    gender: "male",
    isMarried: true,
    country: "2",
    address: {
      city: "Mumbai",
      street: "Perry Cross Rd",
      pincode: "400050"
    }
  };;

  // Template reference
  @ViewChild('contactForm') contactForm: NgForm;

  ngOnInit() {

    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });

  }

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }

  setDefaults() {
    this.contactForm.setValue(this.contact);
  }

  changeCountry() {
    // this.contact.country = "1";
    this.contactForm.controls["country"].setValue("1");
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }

  resetUsingTemplateRef() {
    this.contactForm.reset();
  }

  patchValue() {
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };

    this.contactForm.control.patchValue(obj);

  }

  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address = this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);

  }

}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
} 
