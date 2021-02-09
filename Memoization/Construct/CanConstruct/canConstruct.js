// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings
// The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of
// the `wordBank` array (You may reuse elements of `wordBank` as many times as needed)

const canConstruct=(word, arrWords)=>{

    if(word === '') return true;

    for(let element of arrWords){

        //if the prefix is exactly at the beginning
        if(word.indexOf(element) === 0){

            //remove prefix
            let temp = word.slice(element.length);
            let result = canConstruct(temp, arrWords);
            if(result){
                return true;
            }

        }
    }


    return false;
}

console.log(canConstruct('abcdef', ['abc','abc', 'cd', 'def', 'abcd'])) //=> true
console.log(canConstruct('skateboard', ['bo','rd', 't', 'ska', 'sk', 'boar'])) //=> false
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', "t"])) //=> true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) //=> false

//Time complexity: O(n^m *m (slicing cost))         : m- target.length, n- wordBank.length  (branching factor to height)
//space complexity: O(m^2 (slicing storage of new string))