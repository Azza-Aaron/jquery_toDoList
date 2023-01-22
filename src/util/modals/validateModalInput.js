function validModalInput(mJob, mDesc, mDate) {
  const job = mJob.value;
  const desc = mDesc.value;
  const date = mDate.value;

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
    console.log("full values");
    return true;
  } else {
    console.log("missing fields");
    return false;
  }
}
