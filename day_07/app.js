const pencil = {
  length: '1.5 inches',
  shape: 'hexagon',
  diameter: '1/4 inch', //peoperty where= key : value here diameter is a key also a property name when it is given a value primitive or non primitive
  write: function () {
    console.log('This pencil is writing something.'); //here comsole is a object and log is a method since it has paranthesis.
  },

  erase: function () {}, //methods that erase is method. when there is function in a key then it is a method erase is a key and we define a function in it so it is a method.

  sharpen: function () {},

  draw: function () {
    console.log('i am drawing sth');
  },
};
const newPencil = { ...pencil }; // this will copy all the key values and methods in a new varaible newPencil. this is importnant wehn we want to keep the orginal data and  make changes in a new one.

//creating objects
//1. using object literal
//2. using the new keyword(constructor)
//3. using Obect.create()
//4. using class

//1
const student = {
  firstName: 'Alex',
  lastName: 'Lee',
  email: 'alexlee@gmail.com',
  enroll: function () {
    console.log('got enrolled in the program');
  },
  changeEmail: function () {
    this.email = 'alex_lee_changedemail@gmail.com';
  },
};

const student2 = {
  firstName: 'Donald',
  lastName: 'Trump',
  email: 'donaldtrump@gmail.com',
  enroll: function () {
    console.log('got enrolled in the program');
  },
  changeEmail: function () {
    this.email = 'donald_trump_changedemail@gmail.com';
  },
};
//in programming if we have to repeat sth it is not a good practice so we need to use object literal when we need only 1 object.

//3.
const student3 = Object.create({});
student3.firstName = 'Chris';
student3.lastName = 'lex';

const student4 = {}; //creating an empty object and reassign key values later. this is same as obejct.create
student4.firstName = 'kendric';
student4.lastName = 'lamar';

//2.constructor fucntion
//in the consturctor funtion we always use the uppercase

//this create blueprint of an object but not an actual object first.
function Student(firstName, lastName, email) {
  this.firstName = 'mr/mrs ' + firstName;
  this.lastName = lastName;
  this.email = email;

  this.enroll = function () {
    console.log('got enrolled in the program');
  };
  this.changeEmail = function () {
    this.email = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_changed@gmail.com`;
  };
}

const student_a = new Student('Alex', 'Lee', 'alexlee@gmail.com');
const student_b = new Student('Bob', 'Marley', 'bobmarley@gmail.com');
const student_c = new Student('Charlie', 'Mongor', 'charliemongor@gmail.com');
const student_d = new Student();
student_d.firstName = 'donald';
student_d.lastName = 'trump';
student_d.email = 'donaldtrump@gmail.com';

//4 using class
class StudentObject {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  enroll() {
    console.log('got enrolled in the program');
  }
  changeEmail() {
    this.email = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_changed@gmail.com`;
  }
}

const student_i = new StudentObject('Ivar', 'John', 'ivarjohn@gmail.com');
const student_ii = new StudentObject('Ivar', 'John', 'ivarjohn@gmail.com');

//practice

class Supervisor {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
class Thesis {
  constructor(
    title,
    status,
    school,
    topicAreas,
    topicType,
    preRequisites,
    description,
    attachments,
    vacancies,
    supervisor,
    coSupervisor,
    assessor,
    teamApplication,
    lastModified
  ) {
    this.title = title;
    this.status = status;
    this.school = school;
    this.topicAreas = topicAreas;
    this.topicType = topicType;
    this.preRequisites = preRequisites;
    this.description = this.description;
    this.attachments = 'N/A';
    this.vacancies = 1;
    this.supervisor = supervisor;
    this.coSupervisor = null;
    this.assessor = assessor;
    this.teamApplication = teamApplication;
    this.lastModified = new Date();
  }
}

const allThesis = [new Thesis('Smart Home', 'Available')];
