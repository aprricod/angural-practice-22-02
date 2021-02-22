import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-ex',
  templateUrl: './reactive-form-ex.component.html',
  styleUrls: ['./reactive-form-ex.component.css'],
})
export class ReactiveFormExComponent implements OnInit {
  authForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.authForm = fb.group({
      login: fb.control(null),
      password: fb.control(null),
    });
  }

  ngOnInit(): void {}
}
