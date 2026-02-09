// Create full names from first & last name

function fullNames(users) {
  return users.map(u => `${u.firstName} ${u.lastName}`)
}

const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' }
]

const result = fullNames(people)
console.log("test: ", result)