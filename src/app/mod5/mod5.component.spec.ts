import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5Component } from './mod5.component';

describe('Mod5Component', () => {
  let component: Mod5Component;
  let fixture: ComponentFixture<Mod5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
