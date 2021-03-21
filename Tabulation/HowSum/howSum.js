

const howSum = (target, arr) =>{

    let tempArray = Array(target+1).fill(null);

    tempArray[0] = [];

    for(let i = 0; i<=target; i++){

        if(tempArray[i]!== null){

            arr.forEach(element => {
                let index = element + i;
                if((i+element)<=target){
                    tempArray[index] = [...tempArray[i], element]
                    // tempArray[index].push(element)        
                }
            });

        }
    }


    return tempArray[target]
}




console.log(howSum(7, [2,3])) //[3,2,2]
console.log(howSum(7, [5,3,4,7])) //[4,3]
console.log(howSum(7, [2,4])) //null
console.log(howSum(8, [2,3,5])) //[2,2,2,2]
console.log(howSum(300, [7,14])) //null

//Time complexity: O(mn * m (for copying array)) = O(m^2*n)
//space somplexity:  o(m^2)