import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends AddComponent {
  constructor() {
    super();
    this.updateList();
  }
}