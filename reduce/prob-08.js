// Remove duplicate values

function removeDuplicates(arr) {
  return arr.reduce((unique, item) => {
    if (!unique.includes(item)) unique.push(item)
    return unique
  }, [])
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4])
console.log("test: ", result)