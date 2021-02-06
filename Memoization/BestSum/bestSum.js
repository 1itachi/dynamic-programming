// Write a function `bestSum(target, numbers)` that takes in a targetSum and an array of numbers as arguments
// The function should return an array containing the shortest combination of numbers that add up to exactly the traget sum.
// if there is a tie, return one of the shortest.

const bestSum=(target , numbers)=>{
    if(target===0) return [];
    if(target<0) return null;

    let shortestCombination = null;

     for(let num of numbers){
        let remainder = target-num;
        let remainderCombination = bestSum(remainder, numbers);

        if(remainderCombination !== null){
            let combination = [...remainderCombination, num];
            if(shortestCombination===null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }

        }
     }
     
    return shortestCombination;
}

console.log(bestSum(7,[5,3,4,7])) //7
console.log(bestSum(8,[2,3,5])) //[3,5]
console.log(bestSum(8,[1,4,5])) //[4,4]
console.log(bestSum(100,[1,2,5,25])) //[25,25,25,25]

//time compelxity: O(n^m * m)   m-target sum , n- numbers.length
//space complexity: O(m^2)