function submitInput() {
  if (!validInput()) {
    console.log("not valid"); //todo add logic to highlight empty inputs
    return;
  } else {
    taskArray.push({
      job: $("#job-inp").val(),
      description: $("#desc-inp").val(),
      date: $("#date-inp").val(),
      preserveClass: "class",
      setClass: "class",
    });
    renderElements();
    console.log("submitted");
  }
}
