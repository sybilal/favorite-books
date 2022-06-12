import { Book } from "./book-model";

export interface BookList {
    id: number,
    listName: string,
    books: Book[],
}