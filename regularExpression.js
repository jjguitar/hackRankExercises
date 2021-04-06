let re = new RegExp('^([aeiou]).*\\1$');
let re2 = /^([aeiou]).*\1$/g
let re3 = new RegExp('^(Mr\\.|Mrs\\.|Ms\\.|Dr\\.|Er\\.)[a-zA-Z]{1,}$')
let re4 = new RegExp('(\\d)+', 'g');
let lorem = 'Er.Dr.';

console.log(re.test(lorem))
console.log(re2.test(lorem))
console.log(re3.test(lorem))


