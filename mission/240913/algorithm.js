// 퀵 정렬 (Quick Sort)
function quickSort(arr) {
    // 배열의 길이가 1 이하면 이미 정렬된 상태이므로 그대로 반환
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // 피벗을 중간 요소로 선택
    const left = arr.filter(x => x < pivot); // 피벗보다 작은 요소들
    const middle = arr.filter(x => x === pivot); // 피벗과 같은 요소들
    const right = arr.filter(x => x > pivot); // 피벗보다 큰 요소들

    // 재귀적으로 왼쪽과 오른쪽 부분을 정렬하고 병합
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 병합 정렬 (Merge Sort)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // 왼쪽 부분 재귀적으로 정렬
    const right = mergeSort(arr.slice(mid)); // 오른쪽 부분 재귀적으로 정렬

    return merge(left, right); // 정렬된 두 부분을 병합
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // 두 배열을 비교하며 작은 값을 결과 배열에 추가
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // 남은 요소들을 결과 배열에 추가
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

// 힙 정렬 (Heap Sort)
function heapSort(arr) {
    buildMaxHeap(arr);

    // 힙에서 요소를 하나씩 꺼내어 정렬
    for (let i = arr.length - 1; i > 0; i--) {
        // 루트와 마지막 요소 교환
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // 힙 크기를 줄이고 heapify 호출
        heapify(arr, i, 0);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    // 최대 힙 구성
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // 왼쪽 자식이 루트보다 크면 largest 갱신
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // 오른쪽 자식이 루트보다 크면 largest 갱신
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // largest가 루트가 아니면 교환하고 재귀적으로 heapify 호출
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort:", quickSort([...arr]));
console.log("Merge Sort:", mergeSort([...arr]));
console.log("Heap Sort:", heapSort([...arr]));