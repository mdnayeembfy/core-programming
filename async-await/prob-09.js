// Async loop with for...of

async function processItems(items) {
  const results = [];
  for (const item of items) {
    await delay(300);
    results.push(item * 2);
  }
  return results;
}

processItems([1, 2, 3]).then(console.log);