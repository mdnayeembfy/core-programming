// Retry an async function

async function retry(fn, retries) {
  try {
    return await fn();
  } catch (e) {
    if (retries === 0) throw e;
    return retry(fn, retries - 1);
  }
}

let attempts = 0;
async function unstable() {
  attempts++;
  if (attempts < 3) throw 'Fail';
  return 'Success';
}

retry(unstable, 3).then(console.log);