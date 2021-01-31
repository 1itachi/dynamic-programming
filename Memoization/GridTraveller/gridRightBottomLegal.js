// Find all ways a traveller can travel in a grid of m * n. Legal moves right and bottom

var travel = (m,n)=>{

    if(m===1 && n===1) return 1;
    if(m<1 || n<1) return 0;

    return travel(m-1, n) + travel(m, n-1);

}


console.log(travel(1,1))
console.log(travel(2,3))
console.log(travel(3,2))
console.log(travel(3,3))
console.log(travel(18,18))

// This code is pretty slow for 18,18 => time complexity O(2^m+n), space complexity O(n+m)