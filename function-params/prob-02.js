// Sum numbers using rest parameters

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

const result = sum(1, 2, 3)
console.log("test: ", result)