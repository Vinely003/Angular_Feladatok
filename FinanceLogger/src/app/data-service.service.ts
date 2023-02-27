import { Injectable } from '@angular/core';
import { FormData } from 'src/form-data';

@Injectable()
export class DataService {
  formDataList: FormData[] = [];

  constructor() { }

  setFormData(formData: FormData): void {
    this.formDataList.push(formData);
    console.log(this.formDataList);
    console.log(formData);
  }

  getFormDataList(): FormData[] {
    return this.formDataList;
  }
}