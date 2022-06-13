import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarItemComponent } from './layout/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AvailableBooksComponent } from './components/available-books/available-books.component';
import { ListsComponent } from './components/lists/lists.component';
import { BookCardComponent } from './layout/book-card/book-card.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    AvailableBooksComponent,
    ListsComponent,
    BookCardComponent,
    CreateListComponent,
    ListDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
      },
    ),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
