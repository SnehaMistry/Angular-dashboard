export interface Resumedetails {
    id:number,
    fullname : string,
    designation : string,
    email : string,
    technicalskill : {
        skill : string
    },
    experience : {
        comapnayname : string,
        compDesignation : string,
        expDetails : string,
        startingyear : string,
        endingyear : string

    },
    education : {
        universityname :string,
        course : string,
        percentage : string
    }
}
