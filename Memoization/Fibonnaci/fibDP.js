
// Fibonnaci using recursion
const fibDP = (num, memo={}) =>{
    if (num in memo) return memo[num];
    if(num<=2) return 1;
    memo[num] = fibDP(num-1) + fibDP(num-2);

    return memo[num];
} 

console.log(fibDP(5))

//This technique of using memoization is fast. Reduces time complexity to O(n). 