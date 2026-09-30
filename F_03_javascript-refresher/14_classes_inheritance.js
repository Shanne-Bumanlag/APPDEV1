class Student {
  constructor(name, program) {
    this.name = name;
    this.program = program;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} studying ${this.program}.`);
  }
}

class InformationSystemStudent extends Student {
  constructor(name, year) {
    super(name, "BSIS");
    this.year = year;
  }

  studySpecialization() {
    console.log(`${this.name} is a Year ${this.year} BSIS student managing systems data.`);
  }
}

const shanne = new InformationSystemStudent("Shanne", 3);
shanne.introduce();
shanne.studySpecialization();