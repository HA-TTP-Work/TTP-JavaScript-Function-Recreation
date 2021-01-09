// press control and /
// to comment multiple lines



// JS Assignment

// Due January 7th, 2021 by 10:00:00 AM
// Points 20
// Submitting: Submit via GitHub Gist

// Goal:

// To improve your understanding of JavaScript syntax, functions, and higher-order functions, and to better understand JavaScript and Array methods.

// Assignment:

// The following (12) are some of the most popular and used methods in functional languages:

// forEach
// Map
// Filter
// Some (Any)
// Every
// Reduce
// Includes
// indexOf
// Push
// lastIndexOf
// Object.keys()
// Object.values()

// For this assignment, you will recreate these methods using JavaScript functions. Make sure to carefully understand what each method is designed to do, and DO NOT use any of the respective native JS methods to implement your solutions. Also, keep in mind that these methods do not (except for push()) mutate the input array. We highly suggest utilizing Mozilla Developer Network (MDN) Web Docs to understand how each method works and what arguments they take. Also look into Array.prototype.pop(), Array.prototype.shift(), and other methods for your own enrichment.





// forEach()

// Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and executes any callback function (provided by you) on each of those elements.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


function printElement(element){

console.log(element);

}



const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

function myEach(arr, callFunction){

  for (let i = 0 ; i < arr.length; i++){

    callFunction(arr[i]);
    // it is fine to use length right?



  }



}



myEach(array1, element => console.log(element));

myEach(array1, printElement);










// map()

// Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


function multiplyBy2(element){

return (2 * element);

// should it return?

// would be better to make this a function
// that takes 2 parameters
// one as the element and one as what to multply by
// but this is a little easier

}






const array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

console.log(map1);


function myMap(arr, callFunction){

  var mappedArray = [];

  for (let i = 0 ; i < arr.length; i++){

    mappedArray[i] = callFunction(arr[i]);



  }

  return mappedArray;



}


var testMap1 = myMap(array2, x => x * 2);
console.log(testMap1);




var testMap2 = myMap(array2, multiplyBy2);
console.log(testMap1);




// filter()

// Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);


function greaterThan6Length(element){

if (element.length >6) {

return true;

} else {



  return false;
}



// would be better to make this a function
// that takes 2 parameters
// one as the element and one as the length check
// but this is a little easier

}





function myFilter(arr, callFunction){

  var filteredArray = [];

   var counter = 0;

  for (let i = 0 ; i < arr.length; i++){

    if (callFunction(arr[i]) == true){

      // do not need == true
      // but I like to be explixit

      // how to handle optional parameters


      
      //filteredArray.push(  arr[i]);
      // can I use push?

      // need push or a counter

      filteredArray[counter]= arr[i];

      counter++;

      // it is fine to use push



      // without push we get empty items
      // need a counter if cannot use push

      // this way can avoid using push

      // add to array using counter then increment








    }







  }

  return filteredArray;



}








const results1Check = myFilter(words, greaterThan6Length);

console.log(results1Check);

const results2Check = myFilter(words, word => word.length > 6);

console.log(results2Check);








// some() (aka any())

// Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));




function isEven(element){

if ((element % 2) === 0) {

  // does % modulus do integer division
  // if so then I do not need to use floor like
  // I did in assignment 0
  // something to look into

return true;

} else {



  return false;
}

}

// any()

function mySome(arr, callFunction){

  var check = false;

  for (let i = 0 ; i < arr.length; i++){

    if (callFunction(arr[i]) == true) {

      // can exit here on true

      check = true;


      return true;



    }



  }

  return false;
  // return check;
  // this is for if we want to go the whole array
  // not needed though



}




console.log(mySome(array, isEven));

console.log(mySome(array, even));






// every()

// Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

// very similiar to the previous function
// can alter it slightly to do the same thing

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every








const array3 = [1, 2, 3, 4, 5];

// checks whether an element is even
//const even = (element) => element % 2 === 0;
// already decalred

console.log(array3.every(even));







function myEvery(arr, callFunction){

  var check = true;

  for (let i = 0 ; i < arr.length; i++){

    if (callFunction(arr[i]) != true) {

      // can exit here on true

      check = false;


      return false;



    }



  }

  return true;
  // return check;
  // this is for if we want to go the whole array
  // not needed though



}




console.log(myEvery(array, isEven));

console.log(myEvery(array, even));

const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array4.every(isBelowThreshold));

console.log(myEvery(array, isBelowThreshold));














// reduce()

// Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.





//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce








const array5 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array5.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array5.reduce(reducer, 5));



const reducer2 = (accumulator, currentValue) => accumulator * currentValue;


console.log(array5.reduce(reducer2));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array5.reduce(reducer2, 5));

// works






// how to add optional parameters to functions?


// this one is a bit difficult

// try later




function myReduce(arr, callFunction , accumulator = arr[0] ){



  // use let instead of var

  // if statement to check what we are doing


  // better way to inilize?
  // how to iniilize

  // maybe should be recursive?


  

   if (arguments.length === 3){

     var start = 0;

     // if an initial value was passed we need to look
     // at the first element




   } else {


     var start = 1;

     // if an initial value was not passed
     // we need to look at the first element




   }


  
  for (let i = start ; i < arr.length; i++){

    accumulator = callFunction(accumulator, arr[i]);

  

    // not always going to be +
    // not always going to be 0
    // will work in most cases I think



  }



  return accumulator;











}



console.log(myReduce(array5, reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(myReduce(array5, reducer, 5));








console.log(myReduce(array5, reducer2 ));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(myReduce(array5, reducer2, 5));


//console.log(reduce(array5, reducer2, 5));










// includes()

// Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.









//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes



const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);







function myIncludes(arr, element){

  var find = false;

  for (let i = 0 ; i < arr.length; i++){

    if (arr[i] === element) { // maybe use == instead

      // can exit here on true

      find = true ;


      return true;



    }



  }

  return false;
  // return find;
  // this is for if we want to go the whole array
  // not needed though



}




const words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];



console.log(myIncludes(words2, "spray"));

console.log(myIncludes(words2, "no"));




// indexOf()

// Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf





const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));








function myIndexOf(arr, element, startPos = 0){

  var index ;

  // uses the optional parameter

  for (let i = startPos ; i < arr.length; i++){

    if (arr[i] === element) { // maybe use == instead

      // can exit here on true

      index = i ;


      return index;
      // return i;



    }



  }



  index = -1;

  return index;
  // return -1;
  // this is for if we want to go the whole array
  // not needed though



}



console.log(myIndexOf(beasts,'bison'));
// expected output: 1

// start from index 2
console.log(myIndexOf(beasts, 'bison', 2));
// expected output: 4

console.log(myIndexOf(beasts, 'giraffe'));


// start from certain index











// push()

// Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


// should find a way to get it
// to work properly with multiple parameters
// or elements to push




const animals = ['pigs', 'goats', 'sheep'];

console.log(animals);

const count3 = animals.push('cows');

console.log(animals);


//console.log(count3);
// for some reason not printing



// expected output: 4
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

// for some reason the second print is a little weird







function myPush(arr, ...args){
//function myPush(arr, element){

  // could try to create a finction with just ...args
  // as the parameters
  // maybe then would work better

  // tried allowing multiple parameters


  // trying to allow for multiple arguments gets a little weird

  // the output says circular

  //var index = arr.length ;

  // maybe remove element



  //arr[index] = element;


  // attempt to try and accept multiple elements

  // fro some reason seems to create a circular array when I do this

  // will try and make better latter

  //





 for (var i=1; i < arguments.length; i++) {
// need to ignore the first element
// as that is the array
// it now works properly
    var index = arr.length ;

    // maybe better way to do this to make more clear

    arr[index] = arguments[i];
    // I prefer this method
    // as I think it is more clear

  }






  return arr.length;


  // does not need to return anything
  // the premade function does return though
  // so I also return the length



  


}




const animals2 = ['pigs', 'goats', 'sheep'];

const count2 = myPush(animals2, 'cows');


//const count5 = myPush(animals2, 'cows');
//const count6 = myPush(animals2, 'cows');
//const count7 = myPush(animals2, 'cows');
//const count8 = myPush(animals2, 'cows');
//const count9 = myPush(animals2, 'cows');





//console.log(count2);
// expected output: 4
console.log(animals2);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

myPush(animals2, 'chickens', 'cats', 'dogs');
console.log(animals2);
// only adds the first animal


// make it handle multiple parameters?



// lastIndexOf()

// Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);




const words3 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];



//console.log(myIncludes(words2, "spray"));

//console.log(myIncludes(words2, "no"));







function myLastIndexOf(arr, element, startPos = arr.length){

  var index ;

  // uses the optional parameter

  for (let i = startPos ; i >= 0; i--){

    if (arr[i] === element) { // maybe use == instead

      // can exit here on true

      index = i ;


      return index;
      // return i;



    }



  }



  index = -1;

  return index;
  // return -1;
  // this is for if we want to go the whole array
  // not needed though



}




console.log(myLastIndexOf(beasts,'bison'));
// expected output: 1

// start from index 2
console.log(myLastIndexOf(beasts, 'bison', 2));
// expected output: 4

console.log(myLastIndexOf(beasts, 'giraffe'));









// Object.keys()

// Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop.



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys



//Object.helloWorld = "hi"

// not sure what to do here

// think what I did is fine

// This seems to also be fine from slack message


const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));





function grabKeys(objectItem){



  let keyArray = [];



for (const property in objectItem) {
  keyArray.push(property);
}



return keyArray;








}



//Object.prototype.grabKeys = grabKeys;

// for in loop?



let checkKeys = grabKeys(object1);


console.log(checkKeys);





//Modify the Object class, appending a static method to the Object class., appending a static method to the Object class.

// not sure how to do this





//Object.prototype.grabKeys = grabKeys();

// trying to append






// Object.values()

// Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class. Leverage the “for...in” loop.


// similiar to the last question

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values



const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object2));








function grabValues(objectItem){



  let valueArray = [];



for (const value in objectItem) {
  valueArray.push(objectItem[value]);
}



return valueArray;








}



let checkValues = grabValues(object2);


console.log(checkValues);











//Object.prototype.grabValues = grabValues;







// Miscellaneous Problems (4)

// From Chapter 4 of Eloquent JavaScript

// Sum of a Range





// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// // Your code here.



function range(start, end){


  let rangeArray = [];

  for (let i = start; i <= end ; i++){

    rangeArray.push(i);




  }

  return rangeArray;





}

function sum(arr){

  let sum = 0;


  for (let i = 0; i < arr.length ; i++){

    sum = sum + arr[i];




  }


  return sum;




}



 console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// // → [5, 4, 3, 2]
 console.log(sum(range(1, 10)));
// // → 55


console.log(sum(array5));





function rangeStep(start, end, step = 1){

  // can improve more


  // many ways to improve this
  // the book has many sub problems for this
  // takes a bit of work though

  // there are a lot of edge cases

  // can look more at this later

  // maybe have 2 ways
  // shift around start and end


  if (step == 0){

    // infinite loop
    step = 1;
    // change to default

    // could also throw error



  }


  if ((start > end) && (arguments.length === 2) ){

    step = -1;

    // allows for range ro be done properly in reverse




  }


  let rangeArray = [];




if (step > 0){
  for (let i = start; i <= end ; i = (i + step)){

    rangeArray.push(i);




  }

} else {

  for (let i = start; i >= end ; i = (i + step)){

    rangeArray.push(i);




  }




}




  return rangeArray;





}



console.log(rangeStep(1, 10, 2));


console.log(rangeStep(5, 2, -1));

//range(5, 2, -1)

console.log(rangeStep(5, 2));

console.log(rangeStep(5, 2, 5));
// empty as it should be








// Reversing an Array



// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.


// // → ["C", "B", "A"];




function reverseArray(arr){

  newArray = [];

  for (let i = (arr.length -1) ; i >= 0; i-- ){

    newArray.push(arr[i]);




  }

  return newArray;





}


 console.log(reverseArray(["A", "B", "C"]));










function reverseArrayInPlace(arr){

 

   

  for (let i = 0 ; i <=  Math.floor((arr.length)/2); i++ ){

    let temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 - i] = temp;






  }

  





}



 let arrayValue = [1, 2, 3, 4, 5];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue);
// // → [5, 4, 3, 2, 1]







// A List


// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// // Your code here.

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20


function arrayToList(arr){

  let list = null;
  // tried using []
  // works but not as good

  for (let i = (arr.length - 1); i >= 0; i--){
    // book say easier to build back to front

    list = {value: arr[i], rest: list}
  }

  // used hints from the book

  return list;




}



function listToArray(list){

  let arr = [];

  for (let node = list; node; node = node.rest){

    arr.push(node.value);
    // or push node?




  }

  // used hints from the book

  return arr;




}


// helper function

function prepend(element, list){

  let newList = null;

   newList = {value: element, rest: list}

   return newList;

   // initilize lists with null




}



function nth(list, position){

  // this is the iterative solution

  let count = 0;

  // we want the node at the n position
  // so we move through the list and count the position
  // if count equals position then we are where we want to be
  // if we do not find it then it does not exist
  // meaning undefined


  

  for (let node = list; node; node = node.rest){

    if (count == position){

      return node.value;



    }



    count++;




  }


return undefined;




}


function recursiveNth(list, position){

  if (!list){

     return undefined;
     // for when not in list

    }else if (position === 0){
     // we move along the list to that many positions

     return list.value;


   } else {
        return recursiveNth(list.rest, position -1 );
    }

    


}



 console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
 console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
// // → 20


console.log(nth(arrayToList([10, 20, 30]), 9));
// // → 20

console.log(recursiveNth(arrayToList([10, 20, 30]), 9));
// // → 20



// Deep Comparison



// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true



function deepEqual(itemA, itemB){


  if (itemA === itemB){

    return true;
    // same identity

    // if false and objects then we need to check properties



  }

  if (itemA == null || itemB == null){

    return false;
    // if both are null should probably retuen true
    // might be already included by the above cases
    // but good to have just in case

    // maybe combine these 2



  }

  if (typeof itemA != "object" || typeof itemB != "object"){

    return false;

    // this means one is an object and one is not
    // I think



  }

  let keysOfA = Object.keys(itemA)
  let keysOfB = Object.keys(itemB);


  // check number of keys
  if (keysOfA.length != keysOfB.length) {
    
    return false;
    // different number of properties

  }


// where the values of the properties are equal when compared with a recursive call to deepEqual.

// need to do a recursive call
// I guess for when an object has objects?



for (let key of keysOfA) {
    if (!keysOfB.includes(key) || !deepEqual(itemA[key], itemB[key])){

      return false;

      // returns false if A has a key that B does not have

      // returns false if the value of the key of Also
      // is not the same as the value of the key of B 

      // uses recursion to check this has the value may
      // be an object



    } 
  }

  return true;





}









 let obj = {here: {is: "an"}, object: 2};
 console.log(deepEqual(obj, obj));
// // → true
 console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
 console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true







// Miscellaneous Problems (1)

// 1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// function moveZeros (nums) {

// }
 
// Example:
 
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
 
// Note:
 
// You must do this in-place without making a copy of the array 


let testArray = [0,1,0,3,12];

console.log(testArray);


function moveZeros (nums) {

  let count = 0;


  for ( let i = 0 ; i < nums.length; i++){

    if (nums[i] != 0){

    

      nums[count] = nums[i];

      nums[i] = 0;

      count++;



    }



  }


 }


 moveZeros(testArray);

 console.log(testArray);


