import { BookService } from "../service/BookService";

export class BookController {
    private bookService: BookService 

    constructor (bookService: BookService) {
        this.bookService = bookService
    }

    
}