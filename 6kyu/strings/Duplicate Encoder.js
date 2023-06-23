// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  const wordArr = word.split('')
  const encoded = wordArr.map((char) => {
    const coincidences = wordArr.filter(
      (wordChar) => wordChar.toLowerCase() === char.toLowerCase()
    )
    return coincidences.length > 1 ? ')' : '('
  })

  return encoded.join('')
}

// top good practices / clever codewars community solutions

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
