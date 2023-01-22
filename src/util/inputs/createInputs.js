function createInputs() {
  console.log("create inputs");
  const inputs = [
    "<label id='job-l' class='input-group'>Job</label><input id='job-inp' class='input-group'>",
    "<label id='description-l' class='input-group'>Description</label>",
    "<input id='desc-inp' class='input-group'>",
    "<label id='date-l' class='input-group'>DD/MM/YYYY</label><input id='date-inp' class='input-group'></input>",
    $("<button/>")
      .text("Submit")
      .attr("id", "submit-el")
      .click(function () {
        submitInput();
      }),
  ];
  $("body").append(inputs);
  console.log("inputs made");
}
