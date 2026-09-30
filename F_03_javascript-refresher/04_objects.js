const aboutMe = {
    name: "Shanne",
    age: 20,
    course: "BS Information Systems",

    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old, taking ${this.course}.`;
    }
};

console.log(aboutMe.introduce());

aboutMe.hobby = "UI/UX Design";

console.log(aboutMe);
console.log("My hobby is " + aboutMe.hobby);