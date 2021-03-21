
const allConstruct=(word, arrWords)=>{ 

    let tempArray = Array(word.length+1).fill().map(()=>[])
    tempArray[0] = [[]] // "" is always possible so []

    for(let i=0; i<= word.length; i++){

            arrWords.forEach(element => {
                //slice => from position to position(excluding)
                if(word.slice(i, i+ element.length)===element){

                    const combination = tempArray[i].map(subArray=> [...subArray, element])
                    tempArray[i+element.length].push(...combination)

                }

            });

    }


    return tempArray[word.length]

}


//test cases
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le], [p, ur, purp, le]]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('aaaaaaaaaaaaaz', ["a", "aa", "aaaa", "aaaa"]));

//O(n^m) - time complexity && space complexity