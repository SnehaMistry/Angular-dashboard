export interface Resumedetails {
    id:number,
    fullname : string,
    designation : string,
    email : string,
    phoneno:number,
    technicalskills : TechnicalSkill[],
    experience : Experience[],
    education : Education[]
}

export interface TechnicalSkill{
    skill : string;
}

export interface Experience{
    comapnayname : string,
    compDesignation : string,
    expDetails : string,
    startingyear : string,
    endingyear : string
}

export interface Education{
    universityname :string,
    course : string,
    percentage : string
}