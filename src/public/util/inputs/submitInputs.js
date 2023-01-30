function submitInput() {
  if (!validInput()) {
    console.log("not valid"); //todo add logic to highlight empty inputs
    return;
  } else {
    taskArray.push({
      job: $("#job-inp").val(),
      description: $("#desc-inp").val(),
      date: $("#date-inp").val(),
      preserveClass: false,
      setClass: classes.TODO,
    });
    $(".input-group").val("");
    renderElements();
    console.log("submitted");
  }
}
