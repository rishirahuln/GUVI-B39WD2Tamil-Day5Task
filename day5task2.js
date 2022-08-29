// Do the below programs in arrow functions.
// a) Print odd numbers in an array

let odd = (num) => {
    return (num.filter((number)=>{
        return number%2!=0;
    }))
}
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// b) Convert all the strings to title caps in a string array

let titleCase = (str) => {
    let newarr = [];
    for (let i=0;i<str.length;i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        newarr.push(str[i]);
    }
    return newarr;
}
console.log(titleCase(["apple", "banana", "orange", "mango"]));

// c) Sum of all numbers in an array

let sum = (num) => {
    return (num.reduce((accu, curr)=>{
      return accu+curr;
    }))
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// d) Return all the prime numbers in an array

let primenum = (nums) => {
    return nums.filter((num)=>{
      for (let i=2;i<num;i++) {
        if (num%i===0) return false;
      }
      return num>1;
    })
}
console.log(primenum([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// e) Return all the palindromes in an array

let palindrome = (words) => {
    return words.filter((word)=>{
      return word.split("").reverse().join("")===word;
    })
}
console.log(palindrome(["madam", "apple", "rotator", "basket", "malayalam"]));