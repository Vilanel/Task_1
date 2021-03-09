//example 1
require('./lesson1-1');

//example 2
const person1 = require('./lesson1-2');
console.log(person1);


//example 3
const person2 = require('./lesson1-3');
console.log(person2);

const index = require('./node_modules/math/index');

let arr = [];
for(i=0;i<10;i++){
    arr[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}

console.log('Згенерований масив: '+arr);
console.log('Mінімальний елемент масиву: ' + index.min(arr));
console.log('Сума всіх елементів масиву: '+ index.summ(arr));
console.log('Модуль першого елемннту масиву: '+ index.abs(arr[0]));
