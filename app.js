const name='aman';
const sayHi=require('./utils')
const {name1,name2}=require('./names')
const {aman}=require('./6alternativeWay.js');// when u require module iot automatically executed inside that module
// console.log(sayHi(name))
// console.log(name);
console.log(aman);
// console.log(name1,name2,name);

console.time();
for (let i = 0; i < 2000000000; i++) {
    // console.log()
    
}
console.log('object')
console.timeEnd();