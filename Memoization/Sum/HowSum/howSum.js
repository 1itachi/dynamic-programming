//Write a function `howSum(tragetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
//The function should return an array containing any combination of elements that add up to exactly the targetSum. If there
//is no combination that adds up to the targetSum then return null.
//If there are multiple combinations possible, you may return any single one.
const howSum = (target, numbers)=>{

    if(target === 0) return [];
    if(target < 0) return null;

    for(let number of numbers){

        let remainder = target - number;
        let result = howSum(remainder, numbers);

        if(result !== null){
            return [...result, number];
        }

    }

return null;

}

console.log(howSum(7, [2,3])) //[3,2,2]
console.log(howSum(7, [5,3,4,7])) //[4,3]
console.log(howSum(7, [2,4])) //null
console.log(howSum(8, [2,3,5])) //[2,2,2,2]
console.log(howSum(300, [7,14])) //null

//time compelxity: O(n^m * m)   m-target sum , n- numbers.length
//space complexity: O(m)