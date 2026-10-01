const fetchStudentData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Shanne", course: "BSIS", year: 3 });
    }, 1000);
  });
};

async function loadProfile() {
  console.log("Fetching student profile...");
  const student = await fetchStudentData();
  console.log("Profile retrieved:", student);
}

loadProfile();