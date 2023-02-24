//Lookup profile

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
  for (let i=0; i < contacts.length; i++ ) {
  
  
    if (contacts[i]["firstName"] === name) {
     return contacts[i][prop] || "No such property"
    } 
  } 
  return "No such contact" 

  }
console.log(lookUpProfile("amal", "books"))

/*Write a function in vanilla 
JavaScript that takes an array of integers and returns the sum of all the even numbers in the array.*/


/* Example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumOfEvenNumbers(arr);
console.log(sum); // Output: 30 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
sumOfEven = function(arr){
    for(i=0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumOfEven(arr1))

/*Write a function that takes a string as input and returns the reverse of that string.*/

let str = "hello world";

strRev = function(rev){
 return rev.split('').reverse().join('')
}
console.log(strRev(str))


/* Example const str = "hello world";
const reversedStr = reverseString(str);
console.log(reversedStr); // Output: "dlrow olleh"
*/

/*Write a function that takes an array of integers as input and 
returns the highest number in that array.*/
/* EXample const arr = [2, 5, 1, 8, 3, 7];
const max = findMax(arr);
console.log(max); // Output: 8*/
const arr = [2, 5, 1, 8, 13, 7];
let j =0;
findMax = function(num){
  for(i=0;i< num.length;i++){
    if (num[i] > j){
      j = num[i]
      } 
  }return j
}
console.log(findMax(arr))

/*Write a function that takes a string as input and returns true 
if that string is a palindrome 
(i.e., reads the same forwards and backwards), and false otherwise.*/

let namee = 'aala';
readStr = function(na){
  let nameR = na.split('').reverse().join('');
  if(namee === nameR){
    return 'true';
  }
  return 'false'
}
console.log(readStr(namee))

readStr2 = function(fa){
  let ch= '';
  for(i= za.length-1; i>=0;i--){
    
    ch += fa[i];
    
  }return ch
}
console.log(readStr2(namee))

readStr = function(na){
  strRev(na)
  if(namee === strRev(na)){
    return 'true';
  }
  return 'false'
}
console.log(readStr(namee))
