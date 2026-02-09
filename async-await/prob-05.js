// Error handling with try/catch

function mayFail() {
  return new Promise((_, reject) => reject('Something went wrong'));
}

async function handleError() {
  try {
    await mayFail();
  } catch (err) {
    return err;
  }
}

handleError().then(console.log);