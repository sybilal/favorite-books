import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() name?: string;
  @Input() faicon?: string;
  @Input() route?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
