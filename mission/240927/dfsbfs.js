// 그래프 클래스 정의
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    dfs(start) {
        const visited = new Set();
        const result = [];

        const dfsRecursive = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    dfsRecursive(neighbor);
                }
            });
        };

        dfsRecursive(start);
        return result;
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set([start]);
        const result = [];

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// 그래프 생성 및 노드, 엣지 추가
const graph = new Graph();
[0, 1, 2, 3, 4, 5].forEach(v => graph.addVertex(v));
[[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [4, 5]].forEach(([v1, v2]) => graph.addEdge(v1, v2));

// DFS 실행
console.log("DFS:");
console.log(graph.dfs(0).join(' '));

// BFS 실행
console.log("BFS:");
console.log(graph.bfs(0).join(' '));