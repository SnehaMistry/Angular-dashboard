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
    uploadFile : FileArray;

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

export class searchFilter { 
    firstname: string;
    lastname : string;
    username : string;
    email: string;
    
    constructor(firstname : string , lastname : string,  username : string, email: string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username  =username;
        this.email = email;
    }
}

export class FileArray{
    name : string;
    size : string;
    type: string;
    content : string;

    constructor( name :string, size: string, type: string, content : string)
    {
        this.name = name;
        this.size = size;
        this.type = type;
        this.content = content;
    }
}