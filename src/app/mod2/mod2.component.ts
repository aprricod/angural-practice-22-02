import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
})
export class Mod2Component implements OnInit {
  num: number = 3;

  constructor() {}

  ngOnInit(): void {}

  input(num: number) {
    this.num = num;
  }
}
