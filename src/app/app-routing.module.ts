import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvailableBooksComponent } from "./components/available-books/available-books.component";
import { CreateListComponent } from "./components/create-list/create-list.component";
import { ListDetailsComponent } from "./components/list-details/list-details.component";
import { ListsComponent } from "./components/lists/lists.component";
const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'available-books',
    },
    {
        path: 'available-books', component: AvailableBooksComponent,
    },
    {
        path: 'lists', component: ListsComponent,
    },
    {
        path: 'list/:id', component: ListDetailsComponent,
    },
    {
        path: 'create-list', component: CreateListComponent,
    },
    {
        path: '**', redirectTo: '',
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }