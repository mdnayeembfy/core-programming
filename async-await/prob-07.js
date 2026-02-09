// Timeout wrapper

function timeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject('Timeout'), ms)
    )
  ]);
}

async function testTimeout() {
  return await timeout(delay(2000), 1000);
}

testTimeout().catch(console.log);