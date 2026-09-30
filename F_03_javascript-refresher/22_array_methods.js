const grades = [85, 92, 78, 90, 88];

const weightedGrades = grades.map(grade => grade * 1.05);
console.log("Weighted Grades:", weightedGrades);

const highPerformers = grades.filter(grade => grade >= 85);
console.log("High Performers:", highPerformers);

const totalGradeSum = grades.reduce((sum, grade) => sum + grade, 0);
const averageGrade = totalGradeSum / grades.length;
console.log("Average Grade:", averageGrade);