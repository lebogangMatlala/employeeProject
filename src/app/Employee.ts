export class Employee
{
    name:String;
    surname:String;
    role:String;
    id:String;
    username:String;
    password:String; 
    url;

    constructor(name:String,surname:String,role:String,id:String,username:String,password:String,Url)
    {
        this.name=name;
        this.surname=surname;
        this.role=role;
        this.id=id;
        this.username=username;
        this.password=password;
        this.url = Url;
    }
    

}