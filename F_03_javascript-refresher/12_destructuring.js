const course = {
  title: "App Development 1",
  code: "APPDEV1",
  units: 3
};

const { title, code } = course;
console.log(title, code);

const topFrameworks = ["React", "Vue", "Angular"];
const [firstFramework, secondFramework] = topFrameworks;
console.log(firstFramework, secondFramework);

function printCourseSummary({ title, code }) {
  console.log(`Course: ${title} (${code})`);
}

printCourseSummary(course);