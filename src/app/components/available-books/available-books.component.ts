import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss']
})
export class AvailableBooksComponent implements OnInit {

  constructor(private dataService: DataService) { }

  get availableBooks(){
    return this.dataService.getAvailableBooks()
  }

  ngOnInit(): void {
    console.log()
  }

}
