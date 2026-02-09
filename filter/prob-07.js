// Filter prime numbers

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i*i <= n; i++) if (n % i === 0) return false
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime)
}

const result = filterPrimes([1,2,3,4,5,6,7])
console.log("test: ", result)