async function saveList() {
  await fetch("/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskArray),
  });
  //localStorage.setItem("taskList", JSON.stringify(taskArray));
  console.log("list Saved");
}
