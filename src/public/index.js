//FORMAT READY
$(() => {
  console.log("ready!"); //make sure page is r.
  main();
  getListFromServer(); //todo make this work
  //console.log(serverData.serverResponse[0].job);
  getSavedList();
  // if (localStorage.getItem("taskList")) {
  //   getSavedList();
  //   renderElements();
  // }
});

function main() {
  //HEADER
  const mainHeader = $(
    "<h1 id='headerA' class='headerA'> <strong>To Do List </strong> </h1>"
  );

  // CREATE TABLE & HEADERS
  const mainTable = $(
    "<table class='table' id='mainTable'><thead><tr id='headTr' class='headerB'></tr></thead></table>"
  );
  $("body").append([mainHeader, mainTable]);

  $("#headTr").append([
    $("<th id='jobHeader' scope='col'>Job</th>"),
    $("<th id='descHeader' scope='col'>Description</th>"),
    $(`<th id='dateHeader' scope='col'>Date</th>`),
    $(`<th id='buttonColum' scope='col'></th>`),
  ]);

  mainTable.append([
    $("<tbody></tbody>").attr("id", "body-for-trs"),
    $("<button/>")
      .text("Add Task")
      .attr("class", "btn btn-primary")
      .addClass("btnTopMargin")
      .addClass("AESGroup")
      .click(createInputs),
    // $(
    //   "<form style='display: inline' action='URL.createObjectURL(exportTaskArrayFile)' method='get'> <button id='export-btn-2.o'>Expo to CSV</button></form>"
    // ),
    $("<button/>")
      .text("Export to CSV")
      .attr("id", "exptCsvBtn")
      .attr("class", "btn btn-secondary")
      .addClass("btnTopMargin")
      .addClass("AESGroup")
      .click(exportCSV),
    $("<button/>")
      .attr("id", "save")
      .attr("class", "btn btn-success")
      .addClass("btnTopMargin")
      .addClass("AESGroup")
      .text("Save List")
      .click(saveList),
    $("<button/>")
      .text("Load Saved File")
      .attr("id", "loadSaved")
      .attr("class", "btn btn-dark")
      .click(getListFromServer),
  ]);
}
