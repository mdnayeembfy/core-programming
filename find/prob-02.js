// Find the first even number

function findFirstEven(arr) {
  return arr.find(n => n % 2 === 0)
}

const result = findFirstEven([1, 3, 7, 4, 6])
console.log("test: ", result)