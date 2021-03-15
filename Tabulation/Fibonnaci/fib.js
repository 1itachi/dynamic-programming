//using tabularion (here array) to solve fib

const fib = (n)=>{

    const table = Array(n+1).fill(0);
    table[1] = 1;
    //Two pointers, add the current index value to both pointers
    console.log(table);

    for(let i = 0; i <= n; i++){

        table[i+1] += table[i];
        table[i+2] += table[i];

    }

    console.log(table);

    return table[n];

}


console.log(fib(6)); //8
//console.log(fib(7)) //13
//console.log(fib(8)) //21
//console.log(fib(50)) //12586269025

//time complexity : o(n)
//space complexity : o(n)
