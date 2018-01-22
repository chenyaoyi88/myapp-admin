import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  _dataSet = [];

  resetForm() {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this._dataSet.push({
        key: i,
        name: `Edward King ${i}`,
        age: i,
        address: `London, Park Lane no. ${i}`
      });
    }
    this.validateForm = this.fb.group({});

    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 3 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }
}
