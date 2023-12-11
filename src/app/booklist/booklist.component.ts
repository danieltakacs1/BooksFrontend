import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books:any
  constructor(private base:BaseService) {
    this.base.getBooks().
  }
}
