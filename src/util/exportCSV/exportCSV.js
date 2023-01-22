// create

const downloadTagForCSV = document.createElement("a");

function exportCSV() {
  const list = formatTaskArrayToCSV();
  const expCsvButton = document.getElementById("exptCsvBtn");
  const exportTaskArrayFile = new Blob(list, {
    type: "text/csv",
  });
  downloadTagForCSV.href = window.URL.createObjectURL(exportTaskArrayFile);
  downloadTagForCSV.download = "download.csv";
  expCsvButton.appendChild(downloadTagForCSV);
  $(downloadTagForCSV)[0].click();
  console.log("ran");
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
    const taskFormat = `\n${job}, ${desc}, ${date}, ${task.preserveClass}, ${task.setClass}`;
    comaSeperatedList.push(taskFormat);
  }
  return comaSeperatedList;
}
