export class Employee
{

    name: String;
    email:String ;
    password :String ;
    personalEmail :String ;
    mobileNo :String ;
    dateOfJoining :any ;
    managerId : number;
    constructor(
        
            name: String,
            email:String ,
            password :String ,
            personalEmail :String ,
            mobileNo :String ,
            dateOfJoining :any ,
            managerId : number
    )
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.personalEmail = personalEmail;
        this.mobileNo = mobileNo;
        this.dateOfJoining = dateOfJoining;
        this.managerId = managerId
    }
}