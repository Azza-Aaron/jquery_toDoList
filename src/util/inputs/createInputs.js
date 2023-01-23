function createInputs() {
  $(".input-group").remove();
  $("#submit-el").remove();

  const inputs = [
    "<label id='job-l' class='input-group'><strong>Job</strong></label><input id='job-inp' class='input-group'>",
    "<label id='description-l' class='input-group'><strong>Description</strong></label>",
    "<input id='desc-inp' class='input-group'>",
    "<label id='date-l' class='input-group'><strong>DD/MM/YYYY</strong></label><input id='date-inp' class='input-group' />",
    $("<button/>")
      .text("Submit")
      .attr("id", "submit-el")
      .addClass("btn btn-info")
      .addClass("lightBlue")
      .addClass("btnTopMargin")
      .click(submitInput),
  ];
  $("body").append(inputs);
}
