const userScore = 0;
const defaultScore = 10;

const finalScoreLogical = userScore || defaultScore;
const finalScoreNullish = userScore ?? defaultScore;

console.log("Using ||:", finalScoreLogical);
console.log("Using ??:", finalScoreNullish);

let middleName = null;
const displayMiddleName = middleName ?? "N/A";

console.log("Middle Name:", displayMiddleName);