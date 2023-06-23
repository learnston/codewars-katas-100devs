// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  const isTen = walk.length === 10
  const coordinates = walk.reduce((obj, coordinate) => {
    if (!obj[coordinate]) {
      obj[coordinate] = 0
    }
    obj[coordinate] += 1
    return obj
  }, {})
  const isBack =
    coordinates['n'] === coordinates['s'] &&
    coordinates['e'] === coordinates['w']

  return isTen && isBack
}

// top good practices / clever codewars community solutions

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0
// }
