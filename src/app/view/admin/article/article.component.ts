import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
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
