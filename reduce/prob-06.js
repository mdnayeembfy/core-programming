// Group objects by property

function groupBy(arr, key) {
  return arr.reduce((group, item) => {
    const value = item[key]
    group[value] = group[value] || []
    group[value].push(item)
    return group
  }, {})
}

const users = [
  { name: 'A', city: 'Dhaka' },
  { name: 'B', city: 'Chittagong' },
  { name: 'C', city: 'Dhaka' }
]

const result = groupBy(users, 'city')
console.log("test: ", result)