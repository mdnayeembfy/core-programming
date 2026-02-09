// Filter subarrays with length > 2

function filterLongSubarrays(arr) {
  return arr.filter(sub => sub.length > 2)
}

const result = filterLongSubarrays([[1],[1,2],[1,2,3]])
console.log("test: ", result)