// count the digit 

// function countDigit(n) {
//     if (n == 0) return 1;
//     let count = 0;
//     n = Math.abs(n)
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count++;
// }
// let num = 123;
// const result = countDigit(num);
// console.log(result);

//palindrome number
// function isPalindrome(n) {
//     if (n < 0) return false;
//     let xCopy = n
//     let rev = 0;

//     while (n > 0) {
//         let rem = n % 10;
//         rev = (rev*10) + rem;
//         n = Math.floor(n / 10);
//     }
//     return rev === xCopy;
// }
// let num = 121;
// const result = isPalindrome(num);
// console.log(result)

//reverse the Integer

function reverseInteger(n) {
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }
    return rev;
}
let num = 123456852;
const result = reverseInteger(num);
console.log(result)