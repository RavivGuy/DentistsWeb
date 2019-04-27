import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number;
  longitude: number;

  @ViewChild('f') signupForm: NgForm;
  contactRequest = '';
  user = {
    username: '',
    email: '',
    phone: '',
    contactRequest: '',
  };

  submitted = false;

  constructor() { }

  ngOnInit() {
    this.latitude = 32.306956;
    this.longitude = 34.868919;
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.phone = this.signupForm.value.userData.phone;
    this.user.contactRequest = this.signupForm.value.contactRequest;

    this.signupForm.reset();
  }

}
