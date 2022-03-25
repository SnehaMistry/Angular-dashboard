export class Mentors {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    age: number;
    gender: string;
    birthdate: Date;
    mobilenumber: string;
    location: string;
    address: string;

    constructor(
        id: number,
        firstName: string,
        lastname: string,
        username: string,
        email: string,
        age: number,
        gender: string,
        birthdate: Date,
        mobilenumber: string,
        location: string,
        address: string) {
        this.id = id;
        this.firstname = firstName;
        this.lastname = lastname;
        this.username = username;
        this.email =email;
        this.birthdate = birthdate;
        this.mobilenumber = mobilenumber;
        this.address = address;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

}

export class filterData{
    age : number | null;
    gender : string;

    constructor(age : number | null, gender: string){
        this.age = age;
        this.gender = gender; 
    }
}