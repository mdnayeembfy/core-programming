// Find the first prime number

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function findFirstPrime(arr) {
  return arr.find(isPrime)
}

const result = findFirstPrime([4, 6, 8, 11, 13])
console.log("test: ", result)