// Create URL slugs from titles

function createSlugs(titles) {
  return titles.map(title =>
    title.toLowerCase().replace(/\s+/g, '-')
  )
}

const result = createSlugs(['Hello World', 'JavaScript Map'])
console.log("test: ", result)