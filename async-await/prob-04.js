// Parallel async calls with Promise.all

function asyncTask(value, ms) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function runParallel() {
  const results = await Promise.all([
    asyncTask(1, 500),
    asyncTask(2, 300)
  ]);
  return results;
}

runParallel().then(console.log);