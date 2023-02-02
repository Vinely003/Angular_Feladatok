import { Component} from '@angular/core';

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
}