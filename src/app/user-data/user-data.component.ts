import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  gender;
  ration;
  protein;
  fat;
  carbo;
  isShow = false;


  printData(a, h, w) {
    let age = Number(a.value);
    let weight = Number(w.value);
    let height = Number(h.value);
    if (this.gender == 'woman') {
        this.ration = Math.ceil((10*weight + 6.25*height + 5*age)-161);
    }
    if (this.gender == 'man') {
      this.ration = Math.ceil((10*weight + 6.25*height - 5*age)+5);
    }
    this.protein = Math.ceil(weight * 1.7);
    this.fat = Math.ceil(weight * 1.2);
    this.carbo = Math.ceil(weight * 3.1);

    this.isShow = true;
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
