//Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
//The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.
// You may reuse elements of `wordBank` as many times as needed.
 const countConstruct = (target, words)=>{

    if(target === '') return 1;

    let result = 0;

    for(let element of words){

        //if the prefix is exactly at the beginning
        if(target.indexOf(element) === 0){

            //remove prefix
            let temp = target.slice(element.length);
            result = result + countConstruct(temp, words);n  
        }
    }


    return result;

 }

console.log(countConstruct('abcdef', ['abc','abc', 'cd', 'def', 'abcd'])) //=> true
console.log(countConstruct('skateboard', ['bo','rd', 't', 'ska', 'sk', 'boar'])) //=> false
console.log(countConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', "t"])) //=> true