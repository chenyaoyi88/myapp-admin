import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.scss']
})
export class ArticalComponent implements OnInit {
  _dataSet = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        key: i,
        name: `Edward King ${i}`,
        age: i,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }

}
