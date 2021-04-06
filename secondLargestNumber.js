

function getSecondLargest(nums) {
  // Complete the function
  let number;
  let deleteDuplicated = nums.filter((item,index)=>{
    return nums.indexOf(item) === index;
  })
  console.log(deleteDuplicated)
  let orderedList = deleteDuplicated.sort(function(a,b){return a - b;})
  console.log(orderedList)
  number = orderedList[orderedList.length - 2]
  return number;
}

var arr = [1 , 999 ,5, 90, 45 , 90, 0, 37, 999, 888, '665']
console.log(getSecondLargest(arr))
