// 프로그래머스 lv2 배달 (다익스트라 활용 문제)
function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    const dist = Array(N + 1).fill(Infinity);
    dist[1] = 0; // 시작 노드

    // 우선순위 큐 (거리, 노드)
    const priorityQueue = [[0, 1]];

    while(priorityQueue.length > 0){
        const [curDist, curNode] = priorityQueue.shift();

        if(curDist > dist[curNode]) continue;

        for(const [nextNode, weight] of graph[curNode]) {
            const nextDist = curDist + weight;
            if (nextDist < dist[nextNode]){
                dist[nextNode] = nextDist; // 최단거리 최신화
                priorityQueue.push([nextDist, nextNode]); // 다음 노드 정보 최신화
            }
        }

        priorityQueue.sort((a,b) => a[0]-b[0]);
        // console.log(priorityQueue);
        // console.log(dist);
    }

    return dist.filter(d => d <= K).length;
}

const N = 5, K = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
console.log(solution(N, road, K));

/*
해당 문제는 다익스트라 알고리즘을 이용하며
마을을 이동할 때마다 최단거리를 가진 마을로 이동합니다. (거리를 갱신하며)

while 반복문은 마을의 개수만큼 반복되며
반복문 안에 O(NlogN)의 시간복잡도를 가지는 sort 함수가 있기 때문에
전체 시간복잡도는 O((N+E)logE)
*/