import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  selected = 'active1';
  gender = 'man';
  ration;
  protein;
  fat;
  carbo;
  isShow = false;

  ageControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{2}$/)
  ]);
  heightControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{3}(\.\d)?$/)
  ]);
  weightControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{2,3}(\.\d)?$/)
  ]);

  printData(a, h, w) {
    const age = Number(a.value);
    const weight = Number(w.value);
    const height = Number(h.value);
    if ((age < 10) || (weight < 30) || (weight > 200) || (height < 50) || (height > 250)) {
      return false;
    }
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      return false;
    }

    if (this.gender === 'woman') {
        this.ration = Math.ceil((10 * weight + 6.25 * height - 5 * age) - 161);
    }
    if (this.gender === 'man') {
      this.ration = Math.ceil((10 * weight + 6.25 * height - 5 * age) + 5);
    }

    switch (this.selected) {
      case 'active1' : this.ration = Math.ceil(this.ration * 1.15); break;
      case 'active2' : this.ration = Math.ceil(this.ration * 1.3); break;
      case 'active3' : this.ration = Math.ceil(this.ration * 1.46); break;
      case 'active4' : this.ration = Math.ceil(this.ration * 1.63); break;
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
