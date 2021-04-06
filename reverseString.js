function reverseString(s) {
  try {
    let arrayCadena = s.split("");
    let arrayReversed = [];
    let result = '';
    for(let e of arrayCadena) {
      arrayReversed.unshift(e);
    }
    for(let f of arrayReversed) {
      result = result + f;
    }
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}


const cadena = 'abcdef'
reverseString(cadena)