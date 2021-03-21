// Write a function `canSum(tragetSum, numbers)` that takes in a tragetSum and an array of numbers as arguments.
// The function should return true or false indicating whether or not it is possible to generate the tragetSum from array values.
// You may use an element of the array as many times as needed.
// You may assume that all input members are non negative


const canSum = (target, arr)=>{
        
    let tempArray = Array(target+1).fill(false);

    tempArray[0] = true //base case, getting zero will always be true

    for(let i=0; i<=target; i++){
        
        if(tempArray[i] === true){

        arr.forEach(element => {
            
            let index = i+element;

            if(index<=target) {
                tempArray[index] = true
            }
            
        });

     }
    }
    return tempArray[target]
}










console.log(canSum(7,[5,3,4,7])) //true
console.log(canSum(7,[2,4])) //false
console.log(canSum(7,[2,3])) //true
console.log(canSum(8,[2,3,5])) //true
console.log(canSum(300,[7,14])) //false

//Time complexity :- O(mn)
//Space complexity :- O(m)