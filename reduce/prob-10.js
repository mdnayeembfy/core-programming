// Convert array of strings into a sentence

function buildSentence(words) {
  return words.reduce((sentence, word, index) => {
    return index === 0 ? word : `${sentence} ${word}`
  }, '')
}

const result = buildSentence(['I', 'love', 'JavaScript'])
console.log("test: ", result)