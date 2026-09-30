const bsisSubjects = ["APPDEV1", "DATABASES", "NETWORKING"];
const updatedSubjects = [...bsisSubjects, "WEBDEV", "SYSANALYSIS"];
console.log(updatedSubjects);

const studentProfile = {
  name: "Shanne",
  program: "BSIS",
  year: 3,
  age: 20
};

const updatedProfile = {
  ...studentProfile,
  status: "Active"
};
console.log(updatedProfile);

function calculateTotal(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(calculateTotal(10, 20, 30, 40));