const studentProfile = {
  name: "Shanne",
  program: {
    title: "BSIS",
    year: 3
  }
};

console.log(studentProfile?.program?.title);
console.log(studentProfile?.contact?.email);

const getStatus = studentProfile.getAcademicStatus?.();
console.log(getStatus);