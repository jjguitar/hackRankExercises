const o = [
  {x:1, y:1},
  {x:2, y:3},
  {x:3, y:3},
  {x:3, y:4},
  {x:4, y:5},
]

function getCountArrayObjects(o) {
  let count = 0;
  o.forEach((value, index, array) => {
    // console.log('index', index, 'has a value of', value,
    // 'which correlates to array[' + index + ']:', array[index]);
    // console.log(value)
    // console.log(array[index].x)
    // console.log(array[index].y)
    if(array[index].x == array[index].y) {
      count++;
    }
  });
  // console.log(count)
  return count;
}

console.log(getCountArrayObjects(o))


class Polygon {
  constructor(polygon) {
      this.sides = polygon.length;
      this.figure = polygon;
  }
  perimeter() {
      let result = 0;
      for(let e of this.figure) {
          result += e;
      }
      return result;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());


function sides(literals, ...expressions) {
    console.log(literals[0])
    console.log(literals[1])
    console.log(expressions[0])
    let result = []
    let a = expressions[0]
    console.log(expressions[1])
    let p = expressions[1]
    let s1 = (p + (Math.sqrt((p * p) - (16 * a)))) / 4
    result.push(s1)
    let s2 = (p - (Math.sqrt((p * p) - (16 * a)))) / 4
    result.push(s2)
    console.log(s1)
    console.log(s2)
    console.log(result.sort(function(a,b){return a - b;}))
}

    let s1 = 10;
    let s2 = 20;
    
    [s1, s2] = [s1, s2].sort();
    
    sides`The area is: ${s1 * s2}.
    The perimeter is: ${2 * (s1 + s2)}.`;


const arr = [14, 25, 36 ,47 ,58 ,69, 70, 81, 92];
let multiply = []
arr.map(a => {
  console.log(a)
  if(a % 2 === 0) {
    multiply.push(a * 2);
  } else {
    multiply.push(a * 3)
  }
},);

console.log('Array:', arr);
console.log('Elements Greater Than 3:', multiply);


let decimal = 9; // Este número lo iremos convirtiendo a todas las bases
 
 // Decimal a binario
 let decimalEnBinario = decimal.toString(2); // A la base 2
 console.log("El número decimal %s en binario es %s", decimal, decimalEnBinario);

 console.log('1' & '1')

