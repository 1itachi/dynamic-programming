const bestSum = (target, arr)=>{

    let tempArray = Array(target+1).fill(null)
    tempArray[0] = []

    for(let i=0; i<=target; i++){
        //check if the target is null
        if(tempArray[i]!==null){

            arr.forEach(element => {
                let index = element + i;
                if(index<=target){
                    //check if the newly created array is less than actual one
                    let temp = [...tempArray[i], element]
                    let curr = tempArray[index]
                    if(curr==null || temp.length<curr.length){
                        tempArray[index] = temp
                    }
                    // tempArray[index].push(element)        
                }
            });

        }

    }

    return tempArray[target]; 
}





console.log(bestSum(7,[5,3,4,7])) //7
console.log(bestSum(8,[2,3,5])) //[3,5]
console.log(bestSum(8,[1,4,5])) //[4,4]
console.log(bestSum(100,[1,2,5,25])) //[25,25,25,25]

//time compelxity: O(M^2 * N)   m-target sum , n- numbers.length
//space complexity: O(m^2)