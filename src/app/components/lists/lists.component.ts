import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/models/list-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor(private dataService: DataService) { }


  get lists() {
    return this.dataService.getLists();
  }

  set lists(aa) {
    this.dataService.pushList(aa);
  }

  deleteList(id: number, e: Event) {
    this.dataService.deleteList(id);
    e.stopPropagation();
  }

  ngOnInit(): void {
    console.log();
  }

}
