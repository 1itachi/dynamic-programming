# dynamic-programming
1. Notice any overlapping subproblems
2. decide what is the  trivially smallest input 
3. think recursively to use memoization
4. think iteratively to use tabulation
5. draw strategy first

## Memoization
1. Make it work
    a. Visualize the problem as a tree (each edge should decrease the problem)
    b. implement the tree using a recursion
    c. test it

2. Make it efficient
    a. Add a memo object
    b. add a base case to return memo values
    c. store return values into the memo

## Tabulation
1. Visualize the problem as a table
2. Size the table based on the inputs
3. initialize the table with default values
4. seed the trivial answer into the table
5. Iterate through the table
6. Fill further positions based on the current position
