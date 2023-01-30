async function getListFromServer() {
  const getData = await fetch("/api/todo");
  const data = await getData.json();
  console.log(data);
  taskArray = [];
  for (let i = 0; i < data.length; i++) {
    if (taskArray)
      taskArray.push({
        job: data[i].job,
        description: data[i].description,
        date: data[i].date,
        preserveClass: data[i].preserve_class,
        setClass: data[i].set_class,
      });
  }
  renderElements();
}
