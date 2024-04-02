//function calculateTotal(number) {
//  let sum = 0;
//  for (let i = 1; i <= number; i++) {
//    if (i % 2 == 0) {
//      sum += i;
//    }
//  }
//  return console.log(sum);
//}

//calculateTotal(18);

//const start = 6;
//const end = 17;
//let number;

//for (let i = 0; start >= i <= end; i++) {
//  if (i % 5 == 0) {
//    console.log((number += i));
//  }
//}

//////////////////////////////////////////////////

//function getLastElementMeta(array) {
//  const lastEl = array.length - 1;
//  const newArr = [lastEl, array[lastEl]];

//  return newArr;
//}
//getLastElementMeta(['apple', 'peach', 'pear', 'banana']);
//getLastElementMeta(['apple', 'peach', 'pear']);
//getLastElementMeta(['apple', 'peach']);
//getLastElementMeta(['apple']);

//getLastElementMeta(['apple', 'peach', 'pear']);

//${array[lastEl]} ${lastEl}

//////////////////////////////////////////////

//function getExtremeElements(array) {
//  const firstEl = array[0];
//  const lastEl = array.length - 1;

//  return console.log([firstEl, array[lastEl]]);
//}

//getExtremeElements([1, 2, 3, 4, 5]);
//getExtremeElements(['Earth', 'Mars', 'Venus']);
//getExtremeElements(['apple', 'peach', 'pear', 'banana']);

/////////////////////////////////////////////////

//function getLength(array) {
//  const arrJoin = array.join('');
//  return console.log(arrJoin.length);
//}

//getLength(['Mango', 'hurries', 'to', 'the', 'train']);
//getLength(['M', 'a', 'n', 'g', 'o']);
//getLength(['top', 'picks', 'for', 'you']);

/////////////////////////////////////////////////////

//function calculateEngravingPrice(message, pricePerWord) {
//  const spaceStr = message.split(' ');
//  const elIndex = spaceStr.length;
//  const price = pricePerWord * elIndex;

//  return console.log(price);
//}

//calculateEngravingPrice('JavaScript is in my blood', 10); // 50
//calculateEngravingPrice('JavaScript is in my blood', 20); // 100
//calculateEngravingPrice('Web-development is creative work', 40); // 160
//calculateEngravingPrice('Web-development is creative work', 20); // 80

//////////////////////////////////////////////////////

//function getSlice(array, value) {
//  const valueInArr = array.indexOf(value);
//  if (valueInArr === -1) {
//    return console.log([]);
//  } else {
//    return console.log(array.slice(0, valueInArr + 1));
//  }
//}

//getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'); // ["Mango", "Poly"]
//getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'); // ["Mango", "Poly", "Ajax"]
//getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'); // ["Mango"]
//getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'); // []
//getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'); // []

//////////////////////////////////////////////////////////

//function createArrayOfNumbers(min, max) {
//  let result = [];
//  for (let i = min; i <= max; i++) {
//    result.push(i);
//  }

//  return console.log(result);
//}

//createArrayOfNumbers(1, 3); //[1, 2, 3]
//createArrayOfNumbers(14, 17); // [14, 15, 16, 17]
//createArrayOfNumbers(29, 34); // [29, 30, 31, 32, 33, 34]

//////////////////////////////////////////////////////////

//function calculateTotalPrice(order) {
//  let sum = 0;
//  for (let i = 0; i < order.length; i++) {
//    sum += order[i];
//  }
//  console.log(sum);
//}

//calculateTotalPrice([12, 85, 37, 4]);

//////////////////////////////////////////////////////////

//function getEvenNumbers(start, end) {
//  const evenNumbers = [];
//  for (i = start; i <= end; i++) {
//    if (i % 2 === 0) {
//      evenNumbers.push(i);
//    } else {
//      return [];
//    }

//    return evenNumbers;
//  }
//}

//getEvenNumbers(2, 5);
//getEvenNumbers(3, 11);

//////////////////////////////////////////////////////////

//function checkStorage(storage, item) {
//  if (storage.includes(item.toLowerCase())) {
//    return console.log(`${item.toLowerCase()} is available to order!`);
//  } else {
//    return console.log('Sorry! We are out of stock!');
//  }
//}

//checkStorage(['apple', 'plum', 'pear'], 'plum');
//checkStorage(['apple', 'plum', 'pear'], 'pEAr');

//////////////////////////////////////////////////////////

//function getCommonElements(array1, array2) {
//  const newArr = [];
//  for (let i = 0; i < array1.length; i++) {
//    if (array2.includes(array1[i])) {
//      newArr.push(array1[i]);
//    }
//  }
//  return newArr;
//}

//getCommonElements([1, 2, 3], [2, 1, 17, 19]);
//getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
//getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

//////////////////////////////////////////////////////////

//function calculateTotalPrice(order) {
//  let result = 0;
//  for (const num of order) {
//    result += num;
//  }
//}

//calculateTotalPrice([12, 85, 37, 4]);

//////////////////////////////////////////////////////////

//function createReversedArray() {
//  const arg = Array.from(arguments);
//  arg.toReversed();
//  return console.log(arg);
//}

//createReversedArray(12, 85, 37, 4);
//createReversedArray(412, 371, 94, 63, 176);
//createReversedArray();
