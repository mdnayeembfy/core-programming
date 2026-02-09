// Create a delay function

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  await delay(1000);
  return 'Done';
}

run().then(console.log);