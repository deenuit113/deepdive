function knapsack(weights, values, capacity) {
    const n = weights.length;
    // 배열 초기화
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // 각 아이템에 대해 반복
    for (let i = 1; i <= n; i++) {
        // 각 무게에 대해 반복
        for (let w = 0; w <= capacity; w++) {
            // 현재 아이템의 무게가 현재 무게 제한보다 작거나 같은 경우
            if (weights[i - 1] <= w) {
                // 아이템을 포함하는 경우와 포함하지 않는 경우 중 더 큰 가치를 선택
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                // 아이템을 포함할 수 없는 경우 > 이전 아이템까지의 최대 가치를 그대로 사용
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // 최종 결과는 dp[n][capacity]에 저장됩니다.
    return dp[n][capacity];
}

const weights = [2, 3, 4, 5]; // 각 아이템의 무게
const values = [3, 4, 5, 6]; // 각 아이템의 가치
const capacity = 5; // 배낭의 최대 무게

console.log(knapsack(weights, values, capacity));