import { Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogfetcherService } from '../blogfetcher.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [

    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateX(-200px)', opacity: 0 }),
        animate('1000ms 0.4ms ease-in-out')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  state: string = "inactive";
  isvisiblevar: boolean = true;
  errorMessage: string;
  myForm: FormGroup;
  showMsg: boolean = false;
  constructor(private fb: FormBuilder, private BlogfetcherService: BlogfetcherService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(25)]],
      title: ['', [Validators.required]]
    });
  }

  Webapicaller(data) {
    console.log("function called");

    this.BlogfetcherService.sendMessage(data).subscribe(
      data => {
        console.log('this.users');
        this.isvisiblevar = false;
      },
      error => this.errorMessage = <any>error
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('form submitted');
      this.Webapicaller(this.myForm.value);
      console.log(this.myForm.value.message);
      this.showMsg = true;
      this.myForm.get('email').disable();
      this.myForm.get('message').disable();
      this.myForm.get('title').disable();
    } else {
      // validate all form fields

     
    }
  }

}
