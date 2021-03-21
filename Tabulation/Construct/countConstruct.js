const countConstruct = (target, arrWords)=>{

    let tempArray = Array(target.length+1).fill(0)
    tempArray[0] = 1

    for(let i=0; i<=target.length; i++){

        if(tempArray[i]!==0){

            arrWords.forEach(element => {
                //slice => from position to position(excluding)
                if(target.slice(i, i+ element.length)===element){

                    tempArray[i + element.length] += tempArray[i] 

                }

            });




        }

    }


    return tempArray[target.length]
}




console.log(countConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd'])) //=> 1
console.log(countConstruct('skateboard', ['bo','rd', 't', 'ska', 'sk', 'boar'])) //=> 0
console.log(countConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', "t"])) //=> 4
console.log(countConstruct('purple', ['purp','p', 'ur', 'le', 'purpl', ])) //=> 2
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) //=> 0

//time complexity: O(m^2 * n)
//space complexity: O(m)