function submitModal(i, myModal) {
  $("*").removeClass("dimBody");
  const mJob = document.getElementById("modal-job");
  const mDesc = document.getElementById("modal-des");
  const mDate = document.getElementById("modal-date");
  if (!validModalInput(mJob, mDesc, mDate)) {
    return;
  }
  taskArray[i].job = mJob.value;
  console.log(mJob.value);
  taskArray[i].description = mDesc.value;
  taskArray[i].date = mDate.value;
  taskArray[i].preserveClass = false;
  taskArray[i].setClasses = classes.TODO;
  mJob.value = "";
  mDesc.value = "";
  mDate.value = "";
  myModal.hide();
  renderElements();
}
