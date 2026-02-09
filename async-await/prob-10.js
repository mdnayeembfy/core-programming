// Poll until condition is met

let count = 0;

async function poll() {
  while (true) {
    await delay(500);
    count++;
    if (count === 3) return 'Condition met';
  }
}

poll().then(console.log);