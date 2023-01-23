function editModal(jobField, descriptionField, dateField, i) {
  //console.log("Edit Modal Actioned");
  const myModal = $("#ex1");
  const modalBody = document.getElementById("modal-body");
  modalBody.replaceChildren();

  $(modalBody).append([
    $(
      `<label id="modal-l1" for="modal-job" class='trOverallClass'>Job </label>`
    ),
    $("<input/>").val(`${jobField}`).attr("id", "modal-job"),
    $(
      `<label id="modal-l2" for="modal-des" class='trOverallClass'>Description </label>`
    ),
    $("<input/>").val(`${descriptionField}`).attr("id", "modal-des"),
    $(
      `<label id="modal-l3" for="modal-date" class='trOverallClass'>Date </label>`
    ),
    $("<input/>").val(`${dateField}`).attr("id", "modal-date"),
    $("<button/>")
      .attr("id", "hide-modal")
      .attr("class", "btn btn-info")
      .addClass("lightBlue")
      .addClass("btnTopMargin")
      .text("Submit")
      .click(() => {
        submitModal(i, myModal);
      }),
    $("<button/>")
      .attr("id", "exit-modal")
      .attr("class", "btn btn-info")
      .addClass("lightBlue")
      .addClass("btnTopMargin")
      .text("Close")
      .click(() => {
        myModal.hide();
        $("*").removeClass("dimBody");
      }),
  ]);

  dimBody(myModal, modalBody);
  $(myModal).show();
}

function dimBody(myModal, modalBody) {
  $("*").addClass("dimBody");
  $(myModal).removeClass("dimBody");
  $(modalBody).removeClass("dimBody");
  $("#modal-job").removeClass("dimBody");
  $("#modal-des").removeClass("dimBody");
  $("#modal-date").removeClass("dimBody");
  $("#modal-l1").removeClass("dimBody");
  $("#modal-l2").removeClass("dimBody");
  $("#modal-l3").removeClass("dimBody");
  $("#exit-modal").removeClass("dimBody");
  $("#hide-modal").removeClass("dimBody");
}
