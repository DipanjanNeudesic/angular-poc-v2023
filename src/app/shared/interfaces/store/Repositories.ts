import { Repository } from "./Repository";

interface Repositories{
    total_count:number,
    incomplete_results:boolean,
    items: Repository[]
}

export type {Repositories}