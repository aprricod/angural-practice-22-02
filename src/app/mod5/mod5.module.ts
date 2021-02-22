import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod5Component } from './mod5.component';

@NgModule({
  declarations: [Mod5Component],
  imports: [CommonModule, FormsModule],
  exports: [Mod5Component],
})
export class Mod5Module {}
