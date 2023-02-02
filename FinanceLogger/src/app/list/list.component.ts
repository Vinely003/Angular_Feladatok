import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends AddComponent {
  updateList(): any {
    if (this.finance.value.type === 'invoice') {
      return console.warn(`${this.finance.value.tofrom} owes ${this.finance.value.amount} Ft for ${this.finance.value.details}`);
    } else if (this.finance.value.type === 'payment') {
      return console.warn(`Have pay to ${this.finance.value.tofrom} ${this.finance.value.amount} Ft for ${this.finance.value.details}`);
    }
  }
}
