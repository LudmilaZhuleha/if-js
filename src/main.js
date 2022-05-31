import { hotels, data, studentsData } from "./data/data.js";

class User {
    constructor(options) {
        this.firstname = options.firstname;
        this.lastname = options.lastname;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}
const user = new User({firstname:'Andi', lastname: 'Iva'})
console.log(user.fullname);

class Student extends User{
    constructor(options) {
        super(options);
        this.admissionyear = options.admissionyear;
        this.coursename = options.coursename
    }
    get course(){
        const currentyear = 2022
        return currentyear - this.admissionyear
    }
}
const student = new Student({firstname: 'Ola', lastname: 'Kli', admissionyear:2019, coursename: 'BE'})
console.log(student.course)

class Students {
    constructor (arr){
        this.arr = arr;
    }
}
 Students.prototype.getInfo = function(){
    return this.arr.sort((a,b)=>
    {
        const B = new Student(b).course;
        const A = new Student(a).course;
        if(A > B) return 1
        else if (B>A) return -1
        else return 0
    }).map(item=> `${item.fullname} - ${item.coursename}, ${item.course} course`);
}


const sorted = new Students(studentsData);
console.log(sorted.getInfo())