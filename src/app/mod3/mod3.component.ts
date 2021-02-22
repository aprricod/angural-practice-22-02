import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.component.html',
  styleUrls: ['./mod3.component.css'],
})
export class Mod3Component implements OnInit {
  surname: string = 'Ivanov';

  constructor() {}

  ngOnInit(): void {}

  input(surname: string) {
    this.surname = surname;
  }
}
