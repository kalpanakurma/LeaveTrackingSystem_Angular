export class Manager
{

    name: String;
    email:String ;
    password :String ;
    personalEmail :String ;
    mobileNo :String ;
    dateOfJoining :any ;
    constructor(
        
            name: String,
            email:String ,
            password :String ,
            personalEmail :String ,
            mobileNo :String ,
            dateOfJoining :any ,
    )
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.personalEmail = personalEmail;
        this.mobileNo = mobileNo;
        this.dateOfJoining = dateOfJoining;
       
    }
}