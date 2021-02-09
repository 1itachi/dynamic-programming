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
            result = result + countConstruct(temp, words);
        }
    }


    return result;

 }


console.log(countConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd'])) //=> 1
console.log(countConstruct('skateboard', ['bo','rd', 't', 'ska', 'sk', 'boar'])) //=> 0
console.log(countConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', "t"])) //=> 4
console.log(countConstruct('purple', ['purp','p', 'ur', 'le', 'purpl', ])) //=> 2
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) //=> 0

//Time complexity: O(n^m *m (slicing cost))         : m- target.length, n- wordBank.length  (branching factor to height)
//space complexity: O(m^2 (slicing storage of new string))