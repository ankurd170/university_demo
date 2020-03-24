import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from './user.model';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  user:UserModel;

  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(frm?:NgForm)
  {
    this.user={
      fname:null,
      lname:null,
      email:null,
      mobile:null,
      address:null,
      country:0,
      state:0
    }
  }


  

}
