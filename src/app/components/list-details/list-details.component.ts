import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book-model';
import { BookList } from 'src/app/models/list-model';
import { DataService } from 'src/app/services/data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  id = +this.route.snapshot.params?.id;

  listData?: BookList;
  availableBooks: Book[] = [];

  selectedBook: number = 0;

  ngOnInit(): void {

    this.listData = this.dataService.getListById(this.id);
    this.availableBooks = this.dataService.getAvailableBooks();

    console.log();
  }

  deleteBook(id: number) {
    this.dataService.deleteBookFromList(this.id, id)
  }

  addBookToList() {
    if (+this.selectedBook == 0) return;
    this.dataService.addBookToList(this.id, +this.selectedBook);
  }

  moveItemInArray(pre: any, cur: any) {
    if (this.listData) {
      let a = this.listData.books[pre];

      this.listData.books = this.listData.books.filter(e => e.id != a.id)
      this.listData.books = this.insert(this.listData.books, cur, a);
      this.dataService.updateList(this.listData);

      if (pre != cur) {
        this.toastrService.success('Order Updated');
      }
    }
  }

  insert(arr: any[], index: any, newItem: any) {
    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index)
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    this.moveItemInArray(event.previousIndex, event.currentIndex);
  }

}
