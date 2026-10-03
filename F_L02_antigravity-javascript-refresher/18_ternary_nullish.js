const studentAge = 20;
const isAdult = studentAge >= 18 ? "Eligible" : "Not Eligible";
console.log("Adult Status:", isAdult);

const userScore = 0;
const defaultScore = 10;
const finalScoreNullish = userScore ?? defaultScore;
console.log("Using ??:", finalScoreNullish);

let middleName = null;
const displayMiddleName = middleName ?? "N/A";
console.log("Middle Name:", displayMiddleName);