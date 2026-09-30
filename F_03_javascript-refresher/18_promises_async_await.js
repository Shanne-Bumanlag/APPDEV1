const fetchStudentData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "Shanne", course: "BSIS", year: 3 });
      } else {
        reject("Failed to retrieve student record.");
      }
    }, 1000);
  });
};

async function loadProfile() {
  try {
    console.log("Fetching student profile...");
    const student = await fetchStudentData();
    console.log("Profile retrieved:", student);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadProfile();