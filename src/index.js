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
    "<table class='table' id='mainTable'><thead><tr id='headTr'></tr></thead></table>"
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
    .text("createInputs")
    .click(function () {
      createInputs();
    }),
  $("<button/>")
    .text("Export CSV")
    .click(function () {
      exportCSV();
    }),
  $("<button/>")
    .attr("id", "save")
    .text("Save")
    .click(function () {
      saveList();
    }),
  $("exportCSV").click(function () {
    saveList();
  }),
]);

//EDIT CLASS
$(".headerA").css({ "text-align": "center" });
$(".headerB").css({ "text-align": "center" });
