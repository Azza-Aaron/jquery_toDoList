function validInput() {
  const job = $("#job-inp").val();
  const desc = $("#desc-inp").val();
  const date = $("#date-inp").val();

  if (!job) {
    //todo add input class that makes these red
    console.log("fix job");
  }
  if (!desc) {
    console.log("fix desc");
  }
  if (!date) {
    console.log("fix date");
  }

  console.log(job, desc, date);
  if (job && desc && date) {
    return true;
  } else {
    return false;
  }
}
