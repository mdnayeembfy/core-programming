// Filter adults from list of people

function filterAdults(people) {
  return people.filter(p => p.age >= 18)
}

const users = [{name:'A',age:17},{name:'B',age:20}]
const result = filterAdults(users)
console.log("test: ", result)