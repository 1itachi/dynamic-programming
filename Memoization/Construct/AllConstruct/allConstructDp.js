// Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.
// The function should return a 2D array containing all of the ways that the `target` can be constructed by 
// concatenating lelements of `wordBank` array. Each element of the 2D array should represent one combination that constructs 
// the target.

//You may reuse the elements of `wordBank` as many times as needed.

const allConstruct = (target, wordBank, map = {}) =>{
    if(target in map) return map[target];
    if(target === "") return [[]];

    let result = [];

    for(let word of wordBank){
        //if the prefix is exactly at the beginning
        if(target.indexOf(word) === 0){
         //remove prefix
            let tempTarget = target.slice(word.length);
            let sufixArr = allConstruct(tempTarget, wordBank, map);
            let ways = sufixArr.map(ele=> [word, ...ele]);
            result.push(...ways);
        } 
    }

    map[target] = result;
    return result;
}


//test cases
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le], [p, ur, purp, le]]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ["a", "aa", "aaaa", "aaaa"]));

//time complexity: O(n^m)
//space complexity: O(m)