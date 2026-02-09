// Find the first email ending with @gmail.com

function findGmail(emails) {
  return emails.find(email => email.endsWith('@gmail.com'))
}

const result = findGmail(['a@yahoo.com', 'b@gmail.com'])
console.log("test: ", result)