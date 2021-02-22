import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod4',
  templateUrl: './mod4.component.html',
  styleUrls: ['./mod4.component.css'],
})
export class Mod4Component implements OnInit {
  fio: string = 'ABC';

  constructor() {}

  ngOnInit(): void {}

  input(fio) {
    this.fio = fio;
  }
}
