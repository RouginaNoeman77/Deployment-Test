export class SignUp {

    constructor(public UserName:string = '',
    public FirstName:string = '' ,
    public LastName:string='' ,
    public Gender:string = '' ,
    public DateOfBirth : Date = new Date() ,
    public ProfileImage:string = '' ,
    public Email : string = '' , 
    public password : string = ''){}
}