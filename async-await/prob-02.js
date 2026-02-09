// Simulate fetching data

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Data loaded'), 500);
  });
}

async function getData() {
  const data = await fetchData();
  return data;
}

getData().then(console.log);