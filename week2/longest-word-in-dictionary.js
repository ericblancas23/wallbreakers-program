var longestWord = function(words) {
    const group = {}
  for (let word of words) {
    const layer = word.length - 1
    if (!group[layer]) group[layer] = []
    group[layer].push(word)
  }
  console.log(group);

  function iter(chars, layer) {
    if (!group[layer]) return chars
    let result = chars
    for (let word of group[layer]) {
      if (word.indexOf(chars) === 0) {
        const next = iter(word, layer + 1)
        if (result === chars ||
            (next.length === result.length && result > next) ||
            (next.length > result.length)) result = next
      }
    }
    return result
  }

  return iter('', 0)
}

;[
  ['w','wo','wor','worl', 'world', 'longestWord'], // 'world'
  ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'], // 'apple'
  ["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast",
   "l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"],
  // 'breakfast'
  ["m","mo","moc","moch","mocha","l","la","lat","latt","latte",
   "c","ca","cat"],             // 'latte'
].forEach(words => {
  console.log(longestWord(words))
});