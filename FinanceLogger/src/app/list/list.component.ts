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
      return `${this.finance.value.tofrom} owes ${this.finance.value.amount} Ft for ${this.finance.value.details}`;
    } else if (this.finance.value.type === 'payment') {
      return `Have pay to ${this.finance.value.tofrom} ${this.finance.value.amount} Ft for ${this.finance.value.details}`;
    }
  }
}