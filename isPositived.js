function throwZeroError() {
  // Generate an exception with a value read from stdin
  throw new Error('Zero Error');
}

function throwNegativeError() {
  // Generate an exception with a value read from stdin
  throw new Error('Negative Error');
}

try {
  let num = 9
  if(num > 0){
    console.log('YES')
  }
  else if(num < 0) {
    throwNegativeError()
  } else {
    throwZeroError()
  }
}
catch (e) {
  console.log(e.message);
}