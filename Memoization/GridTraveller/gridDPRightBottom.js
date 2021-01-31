// Find all ways a traveller can travel in a grid of m * n. Legal moves right and bottom
// Memoization

// grid (a, b) = grid (b,a)

var travel = (m,n, memo = {})=>{
    const key = m + ','+n;
    // const key2 = n+','+m;

    // are the args
    if(key in memo) return memo[key];
    // if(key2 in memo) return memo[key2];
    if(m===1 && n===1) return 1;
    if(m<1 || n<1) return 0;

    memo[key] = travel(m-1, n, memo) + travel(m, n-1, memo);
    // memo[key2] = travel(m-1, n, memo) + travel(m, n-1, memo);

    return memo[key];

}


console.log(travel(1,1)) //1
console.log(travel(2,3)) //3
console.log(travel(3,2)) //3
console.log(travel(3,3)) //6
console.log(travel(18,18)) //2333606220

// This code is faster. Time complexity (m*n) distinct nodes. Space complexity O(n+m)