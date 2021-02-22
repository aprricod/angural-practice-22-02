import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation-ex',
  templateUrl: './reactive-form-validation-ex.component.html',
  styleUrls: ['./reactive-form-validation-ex.component.css'],
})
export class ReactiveFormValidationExComponent implements OnInit {
  authForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.authForm = fb.group({
      login: fb.control(null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern(/[a-zA-Zа-яА-Я0-9]+/g),
      ]),
      password: fb.control(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/[a-zA-Zа-яА-Я0-9]+/g),
      ]),
    });
  }

  ngOnInit(): void {}
}
