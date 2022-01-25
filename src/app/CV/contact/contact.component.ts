import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // ContactForm:FormGroup;
  // submitted = false;

  constructor(private fb:FormBuilder) { 

    // this.ContactForm=this.fb.group({
    //   fullName: ['', [Validators.required,Validators.pattern("[a-zA-z]+[ a-zA-z]+")]],
    //   email: ['', [Validators.required,Validators.email]],
    //   phone: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
    //   query: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.ContactForm.controls;
  // }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.ContactForm.invalid) {
  //     return;
  //   }
    
  //   console.log(JSON.stringify(this.ContactForm.value, null, 2));
  // }

  // onReset(): void {
   
  //   // this.ContactForm.reset();
  // }

}
