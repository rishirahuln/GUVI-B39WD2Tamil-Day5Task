// Do the below programs in anonymous function & IIFE
// a) Print odd numbers in an array
// Anonymous function
let odd = function (num) {
  return (num.filter((number)=>{
    return number%2!=0;
  }))
}
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// IIFE function
(function (num) {
  let arr = num.filter((number)=>{
    return number%2!=0;
  })
  console.log(arr);
})([1,2,3,4,5,6,7,8,9]);

// b) Convert all the strings to title caps in a string array
// Anonymous function
let titleCase = function (str) {
  let newarr = [];
  for (let i=0;i<str.length;i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      newarr.push(str[i]);
  }
  return newarr;
}
console.log(titleCase(["apple", "banana", "orange", "mango"]));

// IIFE function
(function (str) {
  let newarr = [];
  for (let i=0;i<str.length;i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      newarr.push(str[i]);
  }
  console.log(newarr);
})(["apple", "banana", "orange", "mango"]);

// c) Sum of all numbers in an array
// Anonymous function
let sum = function (num) {
  return (num.reduce((accu, curr)=>{
    return accu+curr;
  }))
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// IIFE function
(function (num) {
  let arr = num.reduce((accu, curr)=>{
    return accu+curr;
  })
  console.log(arr);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// d) Return all the prime numbers in an array
// Anonymous function
let primenum = function (nums) {
  return nums.filter((num)=>{
    for (let i=2;i<num;i++) {
      if (num%i===0) return false;
    }
    return num>1;
  })
}
console.log(primenum([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// IIFE function
(function (nums) {
  let arr = nums.filter((num)=>{
    for (let i=2;i<num;i++) {
      if (num%i===0) return false;
    }
    return num>1;
  })
  console.log(arr);
})([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// e) Return all the palindromes in an array
// Anonymous function
let palindrome = function (words) {
  return words.filter((word)=>{
    return word.split("").reverse().join("")===word;
  })
}
console.log(palindrome(["madam", "apple", "rotator", "basket", "malayalam"]));

// IIFE function
(function (words) {
  let arr = words.filter((word)=>{
    return word.split("").reverse().join("")===word;
  })
  console.log(arr);
})(["madam", "apple", "rotator", "basket", "malayalam"]);

// f) Return median of two sorted arrays of the same size
// Anonymous function
let median = function (arr1, arr2) {
  let combArr = arr1.concat(arr2);
  let arr = combArr.sort((a,b) => a-b);
  if(arr.length%2===0) {
    return (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2;
  }
  return arr[Math.floor(arr.length/2)];
}
console.log(median([1,5,3],[2,6,4]));
console.log(median([1,5,3],[2,4]));

// IIFE function
(function (arr1, arr2) {
  let combArr = arr1.concat(arr2);
  let arr = combArr.sort((a,b) => a-b);
  if(arr.length%2===0) {
    result = (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2;
  }
  else {
    result = arr[Math.floor(arr.length/2)];
  }
  console.log(result);
})([1,5,3],[2,6,4]);

// g) Remove duplicates from an array
// Anonymous function
let remDup = function (nums) {
  let uniqueArr = [];
  for(let num of nums){
    if(uniqueArr.indexOf(num) === -1) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
}
console.log(remDup([1,2,1,3,2]));

// IIFE function
(function (nums) {
  let uniqueArr = [];
  for(let num of nums){
    if(uniqueArr.indexOf(num) === -1) {
      uniqueArr.push(num);
    }
  }
  console.log(uniqueArr);
})([1,2,1,3,2]);

// h) Rotate an array by k times
// Anonymous function
let rotArr = function (arr, k) {
  for(i=1;i<=k;i++){
    arr.unshift(arr[arr.length-1]);
    arr.pop();
  }
  return arr;
}
console.log(rotArr([1,2,3,4,5], 3));

// IIFE function
(function (arr, k) {
  for(i=1;i<=k;i++){
    arr.unshift(arr[arr.length-1]);
    arr.pop();
  }
  console.log(arr);
})([1,2,3,4,5], 3);