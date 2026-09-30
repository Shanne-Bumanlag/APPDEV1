const studentName = "Shanne";
const program = "BSIS";
const yearLevel = 3;

const summary = `Student Profile:
- Name: ${studentName}
- Course: ${program}
- Year Level: Year ${yearLevel}
- Status: ${yearLevel >= 3 ? "Upperclassman" : "Underclassman"}`;

console.log(summary);