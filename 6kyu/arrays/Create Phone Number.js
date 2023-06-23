// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  const parenthesis = numbers.slice(0, 3).join('')
  const firstGroup = numbers.slice(3, 6).join('')
  const secondGroup = numbers.slice(6).join('')
  return `(${parenthesis}) ${firstGroup}-${secondGroup}`
}
