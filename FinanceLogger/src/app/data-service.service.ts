import { Injectable } from '@angular/core';
import { FormData } from 'src/form-data';

@Injectable()
export class DataService {
  formDataList: FormData[] = [];

  constructor() { }

  setFormData(formData: FormData): void {
    this.formDataList.push(formData);
  }

  getFormDataList(): FormData[] {
    return this.formDataList;
  }
}