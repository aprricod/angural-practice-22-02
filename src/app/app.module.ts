import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import { Mod3Module } from './mod3/mod3.module';
import { Mod4Module } from './mod4/mod4.module';
import { Mod5Module } from './mod5/mod5.module';
import { Mod6Module } from './mod6/mod6.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoWayBindingModule } from './two-way-binding/two-way-binding.module';
import { NgFormExModule } from './ng-form-ex/ng-form-ex.module';
import { ReactiveFormExModule } from './reactive-form-ex/reactive-form-ex.module';
import { ReactiveFormValidationExModule } from './reactive-form-validation-ex/reactive-form-validation-ex.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Mod1Module,
    Mod2Module,
    Mod3Module,
    Mod4Module,
    Mod5Module,
    Mod6Module,
    BrowserAnimationsModule,
    TwoWayBindingModule,
    NgFormExModule,
    ReactiveFormExModule,
    ReactiveFormValidationExModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
