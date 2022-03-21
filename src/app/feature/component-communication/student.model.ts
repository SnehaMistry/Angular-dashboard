export class Student {
    id: number;
    name: string;
    section: string;
    phoneNo: string;
    mark1 : number;
    mark2 : number;
    mark3 : number;

    constructor(id:number, name:string, section: string, phonoNo: string, mark1 : number, mark2 : number, mark3 : number)
    {
        this.id = id;
        this.name = name;
        this.section = section;
        this.phoneNo = phonoNo;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3 ;
    }

}