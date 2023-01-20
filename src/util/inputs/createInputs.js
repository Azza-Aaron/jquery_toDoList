function createInputs() {
  console.log("create inputs");
  const inputs = [
    "<label id='job-l'>Job</label>, <input id='job-inp' class='input-group'></input>",
    "<label id='description-l'>Description</label>",
    "<input id='desc-inp' class='input-group'></input>",
    "<label id='date-l'>DD/MM/YYYY</label>, <input id='date-inp' class='input-group'></input>",
    $("<button/>")
      .text("Submit")
      .click(function () {
        submitInput();
      }),
  ];
  $("body").append(inputs);
  console.log("inputs made");
}
