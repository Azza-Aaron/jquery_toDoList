function renderElements() {
  console.log("rendering elements");

  for (let i = 0; i < taskArray.length; i++) {
    console.log(`job will past ${taskArray[i].job}`);
    $("#body-for-trs").append([$("<tr id='tr" + i + "' ></tr>")]);
    $(`#tr${i}`).append([
      $("<td id='jobHeader" + i + "' >" + taskArray[i].job + "</td>"),
      $("<td id='descHeader" + i + "' >" + taskArray[i].description + "</td>"),
      $("<td id='dateHeader" + i + "' >" + taskArray[i].date + "</td>"),
    ]);
  }
  console.log("elements rendered");
}
