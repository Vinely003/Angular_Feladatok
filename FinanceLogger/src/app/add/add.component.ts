import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data-service.service';
import { FormData } from 'src/form-data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  finance: FormGroup;

  constructor(private dataService: DataService) {
    this.finance = new FormGroup({
      type: new FormControl('', Validators.required),
      tofrom: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.finance.invalid) {
      return;
    }
    const formValue = this.finance.value;
    const formData = new FormData(formValue.type, formValue.tofrom, formValue.details, formValue.amount);
    this.dataService.setFormData(formData);
  }
}
