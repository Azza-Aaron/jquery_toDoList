function renderElements() {
  const body = document.getElementById("body-for-trs");
  body.replaceChildren();
  renderDateClass();

  for (let i = 0; i < taskArray.length; i++) {
    const trForJob = document.createElement("tr");
    const trClass = taskArray[i].setClass;
    trForJob.id = "tr" + i;
    trForJob.classList.add(trClass);
    trForJob.classList.add("trOverallClass");

    $(trForJob).dblclick(() => {
      if (!taskArray[i].preserveClass) {
        taskArray[i].preserveClass = true;
        taskArray[i].setClass = classes.DONE;
        renderElements();
        return;
      }
      if (trClass === classes.DONE && taskArray[i].preserveClass) {
        taskArray[i].preserveClass = false;
        renderElements();
      }
      if (trClass === classes.TODO) {
        taskArray[i].setClass = classes.DONE;
        renderElements();
      } else {
        taskArray[i].setClass = classes.TODO;
        renderElements();
      }
    });

    const jobField = taskArray[i].job;
    const descriptionField = taskArray[i].description;
    const dateField = taskArray[i].date;

    $(body).append([trForJob]);
    $(trForJob).append([
      $(`<td id='jobHeader${i}' >${jobField}</td>`),
      $(`<td id='descHeader${i}' >${descriptionField}</td>`),
      $(`<td id='dateHeader${i}' >${dateField}</td>`),
      $(`<td id='editRemoveButtonsCol${i}' ></td>`),
    ]);
    $("#editRemoveButtonsCol" + i).append([
      $("<button/>")
        .attr("id", "editBtn" + 1)
        .attr("class", "btn btn-info")
        .addClass("lightBlue")
        .addClass("editBtn")
        .text("Edit")
        .click(() => {
          $(".input-group").remove();
          $("#submit-el").remove();
          editModal(jobField, descriptionField, dateField, i);
        }),
      $("<button/>")
        .attr("id", "removeBtn" + -1)
        .attr("class", "btn btn-info")
        .addClass("btnRightMargin")
        .addClass("lightBlue")
        .text("Remove")
        .click(() => {
          taskArray.splice(i, 1);
          renderElements();
        }),
    ]);
  }
}
