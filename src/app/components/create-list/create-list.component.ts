import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  listForm: FormGroup = this.fb.group({
    listName: [, [Validators.required]],
  });

  submitted = false;

  get f() {
    return this.listForm.controls;
  }

  createList() {
    this.submitted = true;
    if (this.listForm.invalid) return;

    const reqObj = {
      listName: this.listForm.value.listName,
    }


    this.dataService.pushList(reqObj);

    this.router.navigateByUrl('/lists')
  }

}
