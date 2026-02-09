// Find the first date before 2020

function findDateBefore2020(dates) {
  return dates.find(d => new Date(d) < new Date('2020-01-01'))
}

const result = findDateBefore2020(['2021-01-01', '2019-05-10'])
console.log("test: ", result)