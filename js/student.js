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

class Centennial extends Student{

    constructor(studentName,program){
        super(studentName);
        this.program = program;
    }

    toString(){
        return "Name: " + this.studentName + "    Program: " + this.program;
    }
}

//let firstStudent = new Student("Louie");
//console.log(firstStudent.toString()); 

let centennialStudent = new Centennial("Armando","Sofware Engineering Technician");
console.log(centennialStudent.toString());
