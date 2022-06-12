import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../models/book-model';
import { BookList } from '../models/list-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private toastrService: ToastrService
  ) {

  }


  get seq() {
    return this.lists.length + 1;
  }

  private lists: BookList[] = [
    /*
    {
      id: 1,
      listName: 'Fiction',
      books: [{
        id: 3,
        title: '1984',
        year: 1949,
        author: 'George Orwell',
        imgUrl: 'assets/1984.jpg'
      },],
    },
    {
      id: 2,
      listName: 'Non-fiction',
      books: [],
    },
    {
      id: 3,
      listName: 'Self-help',
      books: [],
    },
    */
  ];

  private availableBooks: Book[] = [
    {
      id: 1,
      title: 'Dune',
      year: 1965,
      author: 'Frank Herbert',
      imgUrl: 'assets/dune.jpg'
    },
    {
      id: 2,
      title: 'Ender\'s Game',
      year: 1985,
      author: 'Orson Scott Card',
      imgUrl: 'assets/ender.jpg'
    },
    {
      id: 3,
      title: '1984',
      year: 1949,
      author: 'George Orwell',
      imgUrl: 'assets/1984.jpg'
    },
    {
      id: 4,
      title: 'Fahrenheit 451',
      year: 1953,
      author: 'Ray Bradbury',
      imgUrl: 'assets/fahrenheit.jpg'
    },
    {
      id: 5,
      title: 'Brave New World',
      year: 1932,
      author: 'Aldous Huxley',
      imgUrl: 'assets/bnw.jpg'
    },
  ]

  getAvailableBooks(): any {
    return this.availableBooks;
  }

  deleteBookFromList(listId: number, bookId: number) {
    // const list: BookList = this.getListById(listId);
    // const book: Book = this.getBookById(bookId);
    const listIndex = this.lists.findIndex(e => e.id == listId);
    const bookName = this.lists[listIndex].books.find(e => e.id == bookId)?.title;
    this.lists[listIndex].books = this.lists[listIndex].books.filter(e => e.id != bookId);
    this.toastrService.success(`${bookName} removed from ${this.lists[listIndex].listName}`)
  }

  getBookById(id: number): any {
    return this.availableBooks.find(e => e.id == id);
  }


  pushList(data: any) {
    const obj: BookList = {
      id: this.seq,
      listName: data.listName,
      books: []
    };
    this.lists = [...this.lists, obj];
    this.toastrService.success(`${data.listName} Created`)
  }

  deleteList(id: number) {
    this.lists = this.lists.filter(e => e.id != id);
  }

  clearLists() {
    this.lists = [];
  }

  updateList(list: BookList) {
    const listIndex = this.lists.findIndex(e => e.id == list.id)
    this.lists[listIndex] = list;
  }

  addBookToList(listId: number, bookId: number) {
    console.log({ listId, bookId })

    const list: BookList = this.getListById(listId);
    const book: Book = this.getBookById(bookId);
    console.log({ list, book })

    if (list.books.find(e => e.id == bookId)) {
      this.toastrService.error(`${book.title} already added`);
      return;
    }

    this.toastrService.success(`${book.title} added to ${list.listName}`);

    list.books.push({ ...book });
  }

  getLists(): any {
    return [...this.lists];
  }

  getListById(id: number): any {
    return this.lists.find(e => e.id == id);
  }

}
