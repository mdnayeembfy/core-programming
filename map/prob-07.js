// Format Date objects to YYYY-MM-DD

function formatDates(dates) {
  return dates.map(d => new Date(d).toISOString().slice(0, 10))
}

const result = formatDates(['2024-01-01T10:00:00Z'])
console.log("test: ", result)