import { Book } from "../entity/Book";
import { BookRepository } from "../repository/BookRepository";

export class BookService {
    private bookRepository: BookRepository

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository
    }

    async createBook(book: Book): Promise<Book> {
        return this.bookRepository.create(book);
    }
}