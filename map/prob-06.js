// Append unit (px) to numbers

function addPx(arr) {
  return arr.map(n => `${n}px`)
}

const result = addPx([10, 20, 30])
console.log("test: ", result)