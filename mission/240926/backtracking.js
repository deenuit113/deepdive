// nQueens

function solveNQueens(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    const solutions = [];

    function isSafe(row, col) {
        // 같은 열에 퀸이 있는지 확인
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // 왼쪽 위 대각선 확인
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // 오른쪽 위 대각선 확인
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return solutions;
}

console.log(solveNQueens(4));

// 부분집합의 합

function subsetSum(arr, target, sum = 0, index = 0, subset = []) {
    if (sum === target) {
        console.log("Found subset:", subset);
        return true;
    }
    if (sum > target || index >= arr.length) {
        return false;
    }
    
    subset.push(arr[index]);
    if (subsetSum(arr, target, sum + arr[index], index + 1, subset)) {
        return true;
    }
    
    subset.pop();
    return subsetSum(arr, target, sum, index + 1, subset);
}

const arr = [10, 7, 5, 18, 12, 20, 15];
const target = 30;
subsetSum(arr, target);

// 단어 찾기
function exist(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    function dfs(i, j, k) {
        if (k === word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;
        
        const temp = board[i][j];
        board[i][j] = '#'; // 방문 표시
        
        const found = dfs(i+1, j, k+1) || dfs(i-1, j, k+1) || 
                      dfs(i, j+1, k+1) || dfs(i, j-1, k+1);
        
        board[i][j] = temp; // 원상 복구
        return found;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
}

// 테스트 케이스
const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];

const word = "ABCCED";

console.log("Board:");
board.forEach(row => console.log(row.join(' ')));
console.log(`Word "${word}" exists:`, exist(board, word));