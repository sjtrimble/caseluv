import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-select',
  templateUrl: './phone-select.component.html'
})
export class PhoneSelectComponent implements OnInit {

  phones = {
    'Google': ['Pixel', 'Pixel XL'],
    'Apple': ['iPhone 8', 'iPhone X'],
  };

  selectedBrand: string = null;

  selectBrand(brand: string) {
    this.selectedBrand = brand;
  }

  constructor() { }

  ngOnInit() {
  }

}
