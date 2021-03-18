import { getRepository, Repository } from 'typeorm'

import { Book } from '../entity/Book';

export class BookRepository extends Repository<Book>{
    constructor() {
        super()
        return getRepository(Book)
    }
}
