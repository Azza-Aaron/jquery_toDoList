//FORMAT READY
$(function () {
  console.log("ready!"); //make sure page is r.
});

//HEADER
const mainHeader = $(
  "<h1 id='headerA' class='headerA'> <strong>To Do List </strong> </h1>"
);

// CREATE TABLE & HEADERS
$("body").append([
  mainHeader,
  $(
    "<table class='table' id='mainTable'><thead><tr id='headTr' class='headerB'></tr></thead></table>"
  ),
]);

$("#headTr").append([
  $("<th id='jobHeader' scope='col'>Job</th>"),
  $("<th id='descHeader' scope='col'>Description</th>"),
  $("<th id='dateHeader' scope='col'>Date</th>"),
]);

$("table").append([
  $("<tbody></tbody>").attr("id", "body-for-trs"),
  $("<button/>")
    .text("Add Task")
    .click(function () {
      createInputs();
    }),
  // $(
  //   "<form style='display: inline' action='URL.createObjectURL(exportTaskArrayFile)' method='get'> <button id='export-btn-2.o'>Expo to CSV</button></form>"
  // ),
  $("<button/>")
    .text("Export to CSV")
    .attr("id", "exptCsvBtn")
    .click(function () {
      exportCSV();
    }),
  $("<button/>")
    .attr("id", "save")
    .text("Save List")
    .click(function () {
      saveList();
    }),
]);
