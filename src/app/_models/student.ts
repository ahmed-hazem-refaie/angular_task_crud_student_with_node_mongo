import { Department } from './department';
export class Student {
    constructor(
        public _id?:number,
        public Name?:string,
        public Email?:string,
        // tslint:disable-next-line: no-shadowed-variable
        public Department?: number

    ){}
}
