// 선형 검색 (Linear Search)
// 시간 복잡도: O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let numbers1 = [10, 20, 30, 40, 50];
console.log("Linear Search:", linearSearch(numbers1, 30)); // 출력: 2

// 이진 검색 (Binary Search)
// 시간 복잡도: O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let numbers2 = [10, 20, 30, 40, 50];
console.log("Binary Search:", binarySearch(numbers2, 30)); // 출력: 2

// 버블 정렬 (Bubble Sort)
// 시간 복잡도: O(n^2)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let numbers3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort([...numbers3])); // 출력: [11, 12, 22, 25, 34, 64, 90]

// 선택 정렬 (Selection Sort)
// 시간 복잡도: O(n^2)
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let numbers4 = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort([...numbers4])); // 출력: [11, 12, 22, 25, 64]

// 삽입 정렬 (Insertion Sort)
// 시간 복잡도: O(n^2)
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let numbers5 = [12, 11, 13, 5, 6];
console.log("Insertion Sort:", insertionSort([...numbers5])); // 출력: [5, 6, 11, 12, 13]