function renderDateClass() {
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].preserveClass) {
      continue;
    }
    // - moment refers deprecated if date falls bate to date() returning true if moment() false
    if (!moment(taskArray[i].date, "DD-MM-YYYY").isValid()) {
      taskArray[i].preserveClass = true;
      continue;
    }
    if (moment().isSame(moment(taskArray[i].date, "DD-MM-YYYY"), "date")) {
      taskArray[i].setClass = classes.URGENT;
      continue;
    }
    if (moment().isAfter(moment(taskArray[i].date, "DD-MM-YYYY"))) {
      taskArray[i].setClass = classes.DUE;
      continue;
    }
    taskArray[i].setClass = classes.TODO;
  }
}
