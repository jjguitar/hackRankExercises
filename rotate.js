let arr = [1,2,3,4,5]

function rotate(arr, d) {
  let result = arr
  let item;
  for (let i = 0; i < d; i++) {
    item = result.shift()
    console.log(item)
    console.log(result)
    result.push(item)
    console.log(result)
  }
  return result
}

console.log(rotate(arr, 4))