function renderElements() {
  console.log("rendering elements");
  const body = document.getElementById("body-for-trs");
  body.replaceChildren();

  for (let i = 0; i < taskArray.length; i++) {
    console.log(`job will past ${taskArray[i].job}`);
    const trForJob = document.createElement("tr");
    trForJob.id = "tr" + i;
    trForJob.classList.add(taskArray[i].setClass);

    const jobField = taskArray[i].job;
    const descriptionField = taskArray[i].description;
    const dateField = taskArray[i].date;

    $(body).append([trForJob]);
    $(`#tr${i}`).append([
      $(`<td id='jobHeader${i}' >${jobField}</td>`),
      $(`<td id='descHeader${i}' >${descriptionField}</td>`),
      $(`<td id='dateHeader${i}' >${dateField}</td>`),
    ]);
    $("#dateHeader" + i).append([
      $("<button/>")
        .attr("id", "editBtn" + 1)
        .text("Edit")
        .click(() => {
          $(".input-group").remove();
          $("#submit-el").remove();
          editModal(jobField, descriptionField, dateField, i);
        }),
      $("<button/>")
        .attr("id", "removeBtn" + -1)
        .text("Remove")
        .click(() => {
          taskArray.splice(i, 1);
          renderElements();
        }),
    ]);
  }
  console.log("elements rendered");
}
