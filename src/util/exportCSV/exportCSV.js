// create

const exportTaskArrayFile = new Blob(formatTaskArrayToCSV(), { type: ".csv" });
//const downloadUrl = URL.createObjectURL(exportTaskArrayFile);

function exportCSV() {
  console.log("CSV SHOULD DOWNLOAD");
}

function formatTaskArrayToCSV() {
  let comaSeperatedList = [
    "TASK, DESCRIPTION, DATE, PRESERVE CLASS, SET CLASS",
  ];
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const job = task.job.replaceAll(",", "");
    const desc = task.description.replaceAll(",", "");
    const date = task.date.replaceAll(",", "");
    const presClass = task.preserveClass.job.replaceAll(",", "");
    const setClass = task.setClass.replaceAll(",", "");
    const taskFormat = `\n${job}, ${desc}, ${date}, ${presClass}, ${setClass}`;
    comaSeperatedList.push(taskFormat);
  }
  return comaSeperatedList;
}
