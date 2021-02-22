import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  name: string = 'Artem';

  constructor() {}

  ngOnInit(): void {}

  input(name) {
    this.name = name;
  }
}
