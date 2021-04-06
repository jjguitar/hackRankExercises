
function bitWise(n, k) {
  let s = []
  let a = []
  let b = []
  for(let i = 1; i < (n + 1); i++) {
    s.push(i)
  }
  // console.log(s)
  let j = 0;
  let u = 1;
  while(j < n) {
    while(u < n) {
      // console.log("j es "+j)
      // console.log("u es "+u)
      a.push(s[j])
      b.push(s[u])
      u++
    }
    j++;
    u = j + 1;
  }
  const binA = a.map(s => s.toString(2))
  const binB = b.map(s => s.toString(2))
  
  console.log(binA)
  console.log(b)
  console.log(binB)
  let final = []
  for(let i = 0; i < binA.length; i++){
    final.push(parseInt(binA[i] & binB[i],2))
  }
  // console.log('final')

  const greaterThan3 = final.filter(a => a < k);
  // var arr = [1, 2, 3];
  let deleteDuplicated = greaterThan3.filter((item,index)=>{
    return greaterThan3.indexOf(item) === index;
  })
  var max = Math.max(...deleteDuplicated);


// console.log('Elements Greater Than 3:', greaterThan3);
console.log(' Greater Than 3:', max);
}

bitWise(2,2)

