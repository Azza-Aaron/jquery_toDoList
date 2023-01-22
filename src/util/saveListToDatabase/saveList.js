function saveList() {
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  console.log("list Saved");
}
