const numbIslands = (grid) => {

if(grid === null || grid.length === 0) {
    return 0;
}

let numberOfIland = 0;

for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === '1') {
            numberOfIland += getIslandCount(grid, i, j)
        }
    }
}

return numberOfIland;
}

let getIslandCount = (grid, i, j) => {
    if(i < 0 || i > grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return 0;
    }
   
    grid[i][j] = '0';

    getIslandCount(grid, i + 1, j)
    getIslandCount(grid, i - 1, j)
    getIslandCount(grid, i, j + 1)
    getIslandCount(grid, i, j - 1)
  
    return 1;
}

console.log(numbIslands([ ['1'], ['1'], ['1'], ['1'] ]) )