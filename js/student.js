class Student {
    //constructor to initialize the object
    constructor(studentName){
        this.studentName = studentName;
    }

    //return student name
    toString() {
        return "My name is : " + this.studentName;
    }
}

let firstStudent = new Student("Louie");
console.log(firstStudent.toString()); 