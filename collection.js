// // Setup
// var collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(object, id, prop, value) {
//   if (prop != 'tracks' && value !== '') {
//     console.log(1)
//     object[id][prop] = value
//   } else if (prop === 'tracks') {
//     console.log(2)
//     if (object[id][prop] === undefined) {
//       console.log(3)
//       object[id][prop] = []
//     } if (value !== ''){
//       console.log(4)
//       object[id][prop].push(value)
//     }
//   } else if (value === '') {
//     console.log(5)
//     delete object[id][prop]
//   }
//   return object;
// }

// // updateRecords(collection, 5439, 'artist', 'ABBA');
// updateRecords(collection, 5439, "tracks", "Take a Chance on Me")
// console.log(collection)

// Setup
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop){
//   // Only change code below this line
//       let value
//       for(let i = 0; i < contacts.length; i++) {
//           if (contacts[i]['firstName'] === name) {
//               if(contacts[i][prop] !== undefined) {
//                   return contacts[i][prop]
//               } else {
//                 return 'No such property'
//               }
//           } else {
//               value = 'No such contact'
//           }
//       }
//       return value
//   // Only change code above this line
//   }

// console.log(lookUpProfile("Akira", "address"))

// function randomFraction() {

//   // Only change code below this line
//   return (Math.random() * 100).toFixed()

//   // Only change code above this line
// }

// console.log(randomFraction())

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return []
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum)
    return arr
  }
};

console.log(rangeOfNumbers(3, 7))