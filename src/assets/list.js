let taskArray = [];

// taskArray.push({
//     job: $("#job-inp").val(),
//     description: $("#desc-inp").val(),
//     date: $("#date-inp").val(),
//     preserveClass: false,
//     setClass: classes.SOMETHING
// });

function getSavedList() {
  let storedList = localStorage.getItem("taskList");
  taskArray = JSON.parse(storedList);
  console.log(taskArray);
}
