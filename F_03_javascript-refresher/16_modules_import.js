import getAcademicGreeting from "./15_modules_export.js";
import { studentDetails } from "./15_modules_export.js";

console.log(getAcademicGreeting());
console.log(`Student: ${studentDetails.name}, Program: ${studentDetails.program}, Year: ${studentDetails.yearLevel}`);