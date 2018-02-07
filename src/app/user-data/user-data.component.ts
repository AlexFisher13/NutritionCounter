import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  selected = 'active1';
  gender;
  ration;
  protein;
  fat;
  carbo;
  isShow = false;

  ageControl = new FormControl('', [
    Validators.required,
    Validators.pattern('')
  ]);
  heightControl = new FormControl('', [
    Validators.required,
  ]);
  weightControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();


  printData(a, h, w) {
    const age = Number(a.value);
    const weight = Number(w.value);
    const height = Number(h.value);
    if (this.gender == 'woman') {
        this.ration = Math.ceil((10 * weight + 6.25 * height - 5 * age) - 161);
    }
    if (this.gender == 'man') {
      this.ration = Math.ceil((10 * weight + 6.25 * height - 5 * age) + 5);
    }

    switch (this.selected) {
      case 'active1' : this.ration = Math.ceil(this.ration * 1.2); break;
      case 'active2' : this.ration = Math.ceil(this.ration * 1.37); break;
      case 'active3' : this.ration = Math.ceil(this.ration * 1.46); break;
      case 'active4' : this.ration = Math.ceil(this.ration * 1.637); break;
      case 'active5' : this.ration = Math.ceil(this.ration * 1.8); break;
      }

    this.protein = Math.ceil(weight * 1.7);
    this.fat = Math.ceil(weight * 1.2);
    this.carbo = Math.ceil((this.ration - (this.protein * 4 + this.fat * 9)) / 4);

    this.isShow = true;
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
