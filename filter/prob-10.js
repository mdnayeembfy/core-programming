// Filter future dates

function filterFutureDates(dates) {
  const now = new Date();
  return dates.filter(d => new Date(d) > now)
}

const result = filterFutureDates(['2020-01-01','2030-01-01'])
console.log("test: ", result)