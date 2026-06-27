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

// function reverseInteger(n) {
//     let rev = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         rev = (rev * 10) + rem;
//         n = Math.floor(n / 10);
//     }
//     return rev;
// }
// let num = 123456852;
// const result = reverseInteger(num);
// console.log(result)

//Remove duplicate without taking new new array using two pointers-

function removeDuplicate(nums) {
    if (nums.length === 0) return [];
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[x]) {
            x++;
            nums[x] = nums[i]
        }
    }
    return nums.slice(0, x + 1);

}
let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const result = removeDuplicate(arr);
console.log(result)