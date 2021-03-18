
const travel = (m, n)=>{

    const table = Array(m+1).fill().map(()=>Array(n+1).fill(0));
    table[1][1] = 1

    for(let i =0; i<=m; i++){
        for(let j =0; j<=n; j++){

            let current = table[i][j];
            if(i+1 <= m){
                table[i+1][j] += current;
            }
            if(j+1 <= m){
                table[i][j+1] += current;
            }


        }
    }

    return table[m][n]
}












console.log(travel(1,1))
console.log(travel(2,3))
console.log(travel(3,2))
console.log(travel(3,3))
console.log(travel(18,18))

//time complexity O(mn), space complexity O(m,n)