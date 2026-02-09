// Filter duplicates

function filterUnique(arr) {
  return arr.filter((v, i, self) => self.indexOf(v) === i)
}

const result = filterUnique([101,82,82,33,44,44,55])
console.log("test: ", result)