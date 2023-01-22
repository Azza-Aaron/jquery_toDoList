function editModal(jobField, descriptionField, dateField, i) {
  //console.log("Edit Modal Actioned");
  const myModal = $("#ex1");
  const modalBody = document.getElementById("modal-body");
  modalBody.replaceChildren();

  $(modalBody).append([
    $("<p>").text("Edit Fields"),
    $(`<label for="modal-job">Job </label>`),
    $("<input/>").val(`${jobField}`).attr("id", "modal-job"),
    $(`<label for="modal-des">Description </label>`),
    $("<input/>").val(`${descriptionField}`).attr("id", "modal-des"),
    $(`<label for="modal-date">Date </label>`),
    $("<input/>").val(`${dateField}`).attr("id", "modal-date"),
    $("<button/>")
      .attr("id", "hide-modal")
      .text("Close")
      .click(() => {
        submitModal(i, myModal);
      }),
  ]);

  $(myModal).show();
}
