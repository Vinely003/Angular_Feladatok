import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { FormData } from 'src/form-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  formData: FormData[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.formData = this.dataService.getFormDataList();
  }
}