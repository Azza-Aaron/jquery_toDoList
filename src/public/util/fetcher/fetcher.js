async function getListFromServer() {
  const getData = await fetch("/api/todo");
  const data = await getData.json();
  console.log(data);
  taskArray = [];
  addToArrayFromServer(data, taskArray);
}

function addToArrayFromServer(data, array) {
  for (let i = 0; i < data.length; i++) {
    array.push({
      job: data[i].job,
      description: data[i].description,
      date: data[i].date,
      preserveClass: data[i].preserve_class,
      setClass: data[i].set_class,
      serverID: data[i].id,
    });
  }
}
