// Filter objects missing a required property

function filterWithId(arr) {
  return arr.filter(obj => obj.hasOwnProperty('id'))
}

const result = filterWithId([{id:1},{name:'x'},{id:2}])
console.log("test: ", result)