// Filter out falsy values

function filterTruthy(arr) {
  return arr.filter(Boolean)
}

const result = filterTruthy([0,1,false,true,null,'hola',''])
console.log("test: ", result)