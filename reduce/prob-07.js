// Build a lookup object by id

function createLookup(arr) {
  return arr.reduce((lookup, item) => {
    lookup[item.id] = item
    return lookup
  }, {})
}

const result = createLookup([{ id: 1, name: 'X' }, { id: 2, name: 'Y' }])
console.log("test: ", result)