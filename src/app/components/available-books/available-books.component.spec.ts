import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBooksComponent } from './available-books.component';

describe('AvailableBooksComponent', () => {
  let component: AvailableBooksComponent;
  let fixture: ComponentFixture<AvailableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
