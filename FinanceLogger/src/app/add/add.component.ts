import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  finance = new FormGroup({
    type: new FormControl(''),
    tofrom: new FormControl(''),
    details: new FormControl(''),
    amount: new FormControl('')
  })

  updateList(): any {
    if (this.finance.value.type === 'invoice') {
      return `${this.finance.value.tofrom} owes ${this.finance.value.amount} for ${this.finance.value.details}`;
    } else if (this.finance.value.type === 'payment') {
      return `Have to pay to ${this.finance.value.tofrom} ${this.finance.value.amount} for ${this.finance.value.details}`;
    }
  }
}