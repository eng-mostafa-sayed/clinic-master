export interface Doctor {
    name:string,
    type?:string,
    password:string,
    email:string,
    gender?:string,
    specification:string,
    proficiency:string
    certificates:string,
    tokens:[{
        token:string
        _id:string
    }]
}
