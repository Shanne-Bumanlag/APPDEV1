// 1. Array .map()
const skills = ["JavaScript", "HTML", "CSS"];
const upperSkills = skills.map((skill) => skill.toUpperCase());
console.log("Transformed Skills:", upperSkills);

// 2. Object Destructuring
const developer = {
  devName: "Jordan",
  role: "Frontend Engineer",
  experienceYears: 3,
};
const { devName, role } = developer;
console.log(`Developer: ${devName}, Role: ${role}`);

// 3. Spread Operator with Arrays
const baseTech = ["Git", "VS Code"];
const fullStackTech = [...baseTech, "Node.js", "React"];
console.log("Base Tech:", baseTech);
console.log("Full Stack Tech:", fullStackTech);