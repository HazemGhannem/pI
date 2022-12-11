import { Etudiant } from './etudiant';
export class Pagination {
    content?:Etudiant[]
    pageable?:{
        sort:{
            unsorted: Boolean,
            sorted: Boolean,
            empty: Boolean
        },
        pageNumber: number,
        pageSize: number,
        offset: number,
        paged: Boolean,
        unpaged: Boolean
    }
    totalPages!: number
    totalElements!: number
    last!: Boolean
    first!: Boolean
    size!: number
    number!: number
    sort!: {
        unsorted: Boolean
        sorted: Boolean
        empty: Boolean
    }
    numberOfElements!: number
    empty!: Boolean
}
