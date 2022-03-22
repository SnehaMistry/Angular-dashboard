export class Student {
    id: number;
    name: string;
    section: string;
    phoneNo: string;
    marks: number[]

    constructor(id:number, name:string, section: string, phonoNo: string, marks: number[])
    {
        this.id = id;
        this.name = name;
        this.section = section;
        this.phoneNo = phonoNo;
        this.marks = marks
    }

}