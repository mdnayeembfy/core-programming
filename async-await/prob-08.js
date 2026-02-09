// Convert callback-based API to async

function readDataCallback(cb) {
  setTimeout(() => cb(null, 'File data'), 500);
}

function readDataAsync() {
  return new Promise((resolve, reject) => {
    readDataCallback((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

async function read() {
  return await readDataAsync();
}

read().then(console.log);