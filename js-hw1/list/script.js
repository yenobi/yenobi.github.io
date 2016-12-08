'use strict'

var obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//
// function printList(list) {
// 	for (var key in list) {
//   	console.log(list[key]);
//     key = key.key;
//   }
// }
//
// printList(list);

// var obj = {
// 	name: 'Jack',
//   age: 16,
//   weight: 75
// };

alert(Object.keys(obj.next));

// function print(obj) {
// 	for (var key in obj) {
//     if ( typeof obj[key] === "object") {
//         alert("A is object");
//     } else if (obj[key] === null) {
//       break
//     } else {
//       alert(obj[key]);
//     }
//   }
// }
//
// print(obj);
