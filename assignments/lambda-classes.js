// CODE here for your Lambda Classes
class People {
    constructor(args) {
        this.name = args.name;
        this.age = args.age;
        this.location = args.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends People {
    constructor(args) {
        super(args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student} recieves a perfect score on ${subject}`);
    }
    gradeStudent(student) {
        let max = Math.floor(101);
        let min = Math.ceil(0);
        student.grade = Math.floor(Math.random() * (max - min)) + min;
        if(student.grade < 100) {
        console.log(`${student.name} recieves a: ${student.grade}`);
        return student.grade;
        } else {
            console.log(`${student.name} GRADUATED!!`)
        }
    }
}

class Students extends People {
    constructor(args){
        super(args);
        this.previousBackground = args.previousBackground;
        this.className = args.className;
        this.favSubjects = args.favSubjects;
        this.grade = args.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssingment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge for ${subject}`);
    }
    graduate(student, teacher) {
        let i = student.grade;
        while(true){
            if(i > 70) {
                console.log(`Ready to graduate ${student.name}`);
                break;
            } else {
               i = teacher.gradeStudent(student);
               continue;
            }
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(args){
        super(args);
        this.gradClassName = args.gradClassName;
        this.favInstructor = args.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${Students.name}, @${channel} standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const Josh = new Instructor ({
    name: 'Josh',
    age: 'Unknown',
    location: 'Lambda'
});

const Tyler = new Students ({
    name: 'Tyler',
    age: 23,
    location: 'NJ',
    previousBackground: 'Mechanics',
    favSubjects: 'Web Development',
    grade: 0
});

const Daniel = new ProjectManagers ({
    name: 'Daniel',
    age: 'Unknown',
    location: 'Lambda'
});
//      INSTRUCTOR
Josh.speak();
Josh.demo('JavaScript');
Josh.grade('Tyler', 'JSIV');
Josh.gradeStudent(Tyler);
//      STUDENT
Tyler.speak();
Tyler.listsSubjects();
Tyler.PRAssingment('JSIV');
Tyler.sprintChallenge('JSV');
Tyler.graduate(Tyler, Josh);
//   PROJECT MANAGER
Daniel.speak();
Daniel.standUp('web18_dan');
Daniel.debugsCode('Tyler', 'JSIV');
Daniel.gradeStudent(Tyler);
