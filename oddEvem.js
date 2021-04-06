function oddEven(n) {
  let m;
  if(n % 3 === 0 && n % 2 === 0) {
      return 'oddEven'
  }
  if (n % 3 === 0 || (n % 3 !== 0 && n % 2 !== 2)) {
      return 'odd'
  }
  if (n % 2 === 0) {
      return 'even'
  }
}

function main() {
  const N = 29;
  let result;
  result = oddEven(N)
  console.log(result)
  if (result === 'oddEven' && N < 20) {
      console.log('Weird')
  }
  else if ((result === 'even' || result === 'oddEven') && N > 20) {
      console.log('Not Weird')
  }
  else if (result === 'odd' || result === 'oddEven'){
      console.log('Weird')
  }
  else if (result === 'even' && N < 5) {
      console.log('Not Weird')
  }
  else if (result === 'even' && N > 5 && N <= 20) {
      console.log('Weird')
  }
  
}

main()