let array = Array(6)
// let inS =  `1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0`

// let inS = `-9 -9 -9 1 1 1
// 0 -9 0 4 3 2
// -9 -9 -9 1 2 3
// 0 0 8 6 6 0
// 0 0 0 -2 0 0
// 0 0 1 2 4 0`

let inS = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 9 2 -4 -4 0
0 0 0 -2 0 0
0 0 -1 -2 -4 0`

array = inS.split('\n').map(arrt => arrt.split(' ').map(arrTemp => parseInt(arrTemp, 10)))


// console.log(array)
let arr2 = []

function sumArray(n, k) {
  let count = 0;
  let sum = 0;

  for (let i = n; i < n + 3; i++) {
    for (let j = k; j < k + 3; j++) {
      console.log(`Index ${i} ${j}`)
      console.log(array[i][j])
      console.log(`el count va: ${count}`)
      if (count !== 3 && count !== 5) {
        sum = sum + array[i][j]
        console.log(`la suma es: ${sum}`)
      }
      count++
    }
  }
  arr2.push(sum)
}

function hourglassSum(array) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sumArray(i, j)
    }
  }
  let arr3 = [...arr2]
  arr3 = arr3.sort( (a, b) => a > b ? -1 : 1)
  let result = arr3.shift()
  return result
}

console.log(hourglassSum(array))
console.log(array)
console.log(arr2)
// sumArray(0, 0)
// sumArray(0, 1)
// sumArray(0, 2)
// sumArray(0, 3)

// sumArray(1, 0)
// sumArray(1, 1)
// sumArray(1, 2)
// sumArray(1, 3)

// sumArray(2, 0)
// sumArray(2, 1)
// sumArray(2, 2)
// sumArray(2, 3)