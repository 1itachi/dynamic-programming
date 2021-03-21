const canConstruct=(word, arrWords)=>{ 

    let tempArray = Array(word.length+1).fill(false)
    tempArray[0] = true // "" is always possible

    for(let i=0; i<= word.length; i++){

        if(tempArray[i] === true){

            arrWords.forEach(element => {
                //slice => from position to position(excluding)
                if(word.slice(i, i+ element.length)===element){

                    tempArray[i + element.length] = true

                }

            });

        }

    }


    return tempArray[word.length]

}



console.log(canConstruct('abcdef', ['abc','abc', 'cd', 'def', 'abcd'])) //=> true
console.log(canConstruct('skateboard', ['bo','rd', 't', 'ska', 'sk', 'boar'])) //=> false
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', "t"])) //=> true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) //=> false

//time complexity: O(m^2 * n)
//space complexity: O(m)


//for first test case the array will look somthing like below
//  0    1    2   3    4    5   6   
//| T |  F |  F | F  | F |  F | F  |
//  a    b    c   d    e    f