function vowelsAndConsonants(s) {
  const array = s.replace(/\s+/g, '').split('');
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let firstVowel = [];
  let secondConsonant = [];
  for(let i = 0; i < array.length; i++) {
    if(vowel.indexOf(array[i]) > -1) {
      firstVowel.push(array[i])
    } else {
      secondConsonant.push(array[i])
    }
  }
  const firstVowelSecondConsonant = firstVowel.concat(secondConsonant)
  for(let j = 0; j < firstVowelSecondConsonant.length; j++) {
    console.log(firstVowelSecondConsonant[j])
  }
}

vowelsAndConsonants('java  scrip111tloops')



