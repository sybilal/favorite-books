import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  @Input() book?: Book;

  ngOnInit(): void {
    console.log();
  }

}
