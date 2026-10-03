try {
  const jsonString = '{"name": "Shanne", "course": "BSIS"}';
  const parsedData = JSON.parse(jsonString);
  console.log("Parsed JSON:", parsedData);

  const backToString = JSON.stringify(parsedData);
  console.log("Stringified JSON:", backToString);
} catch (error) {
  console.error("JSON Error:", error.message);
} finally {
  console.log("JSON operation completed.");
}