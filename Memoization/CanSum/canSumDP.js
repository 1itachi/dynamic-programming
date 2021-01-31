// Write a function `canSum(tragetSum, numbers)` that takes in a tragetSum and an array of numbers as arguments.
// The function should return true or false indicating whether or not it is possible to generate the tragetSum from array values.
// You may use an element of the array as many times as needed.
// You may assume that all input members are non negative

const canSum=(target,arr, memo={})=>{
    if(target in memo) return memo[target];
    if(target==0) return true;
    if(target<0) return false;
    for(let i=0; i<arr.length; i++){
        let remainder = target - arr[i];
        memo[remainder] = canSum(remainder, arr, memo)
        if(memo[remainder]){
            return true
        } 
    }
    return false;
}


console.log(canSum(7,[5,3,4,7])) //true
console.log(canSum(7,[2,4])) //false
console.log(canSum(7,[2,3])) //true
console.log(canSum(8,[2,3,5])) //true
console.log(canSum(300,[7,14])) //false

// This is fast. Time complexity: O(m*n)    , Space complexity: O(m)

