import { Component } from '@angular/core';

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
      return console.warn(`${this.finance.value.tofrom} owes ${this.finance.value.amount} Ft for ${this.finance.value.details}`);
    } else if (this.finance.value.type === 'payment') {
      return console.warn(`Have pay to ${this.finance.value.tofrom} ${this.finance.value.amount} Ft for ${this.finance.value.details}`);
    }
  }
}