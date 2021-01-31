
// Fibonnaci using recursion
const fib = (num) =>{

    if(num<=2) return 1;
    return fib(num-1) + fib(num-2);
} 

console.log(fib(5))

//This piece of code is good for small numbers but when we give large values of n, it is pretty slow. (time complexity of 2^n)