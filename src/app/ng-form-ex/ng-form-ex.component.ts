import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form-ex',
  templateUrl: './ng-form-ex.component.html',
  styleUrls: ['./ng-form-ex.component.css'],
})
export class NgFormExComponent implements OnInit {
  auth = {
    login: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
