import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})

export class UserDataComponent implements OnInit {

  ration;
  protein;
  fat;
  carbo;
  isShow = false;

  printData(height, weight) {
    this.isShow = true;
    this.ration = Math.ceil(Number(weight.value) * 30);
    this.protein = Math.ceil(Number(weight.value) * 1.7);
    this.fat = Math.ceil(Number(weight.value) * 1.2);
    this.carbo = Math.ceil(Number(weight.value) * 3.1);
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
