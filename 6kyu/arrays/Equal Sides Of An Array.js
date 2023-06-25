// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function sumArr(arr) {
  if (!arr.length) return 0
  return arr.reduce((total, curr) => total + curr)
}

function findEvenIndex(arr) {
  let equalityIdx = 0
  if (!sumArr(arr)) return equalityIdx
  equalityIdx = -1
  for (let i = 0; i < arr.length; i++) {
    const left = sumArr(arr.slice(0, i))
    const right = sumArr(arr.slice(i + 1))
    const equality = left === right
    if (equality) equalityIdx = i
  }
  return equalityIdx
}
// top good practices / clever codewars community solutions

// function findEvenIndex(arr)
// {
//   var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(var i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];

//       if(left == right) return i;
//   }

//   return -1;
// }
