// Filter even numbers

function filterEvens(arr) {
    return arr.filter(n => n % 2 === 0)
}

const result = filterEvens([11,12,13,21,28,24])
console.log("test: ", result)