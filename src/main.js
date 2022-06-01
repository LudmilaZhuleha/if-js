import { studentsData } from './data/data.js';

//Create class User with constructor options: firstName and lastName, and getter fullname returning firstname and
// lastname
class User {
  constructor(options) {
    this.firstname = options.firstName;
    this.lastname = options.lastName;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
//Create class Student with constructor options: admissionYear and courseName, and getter course returning
// year of studying (current year minus admission year)
class Student extends User {
  constructor(options) {
    super(options);
    this.admissionyear = options.admissionYear;
    this.coursename = options.courseName;
  }
  get course() {
    const currentYear = (new Date()).getFullYear();
    return currentYear - this.admissionyear;
  }
}

//Create class Students accepting an array as constructor and getter getInfo() returning sorted array by course ()
// in the following way: array of strings: ${fullName} - ${courseName}, ${course} course
class Students {
  constructor(arr) {
    this.arr = arr;
  }
  get getInfo() {
    return this.arr
      .sort((a, b) => new Student(a).course - new Student(b).course)
      .map(
        (item) =>
          `${new User(item).fullname} - ${new Student(item).coursename}, ${
            new Student(item).course
          } course`,
      );
  }
}

const sorted = new Students(studentsData);
console.log(sorted.getInfo);
