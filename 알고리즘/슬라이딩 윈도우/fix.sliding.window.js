function FixSlidingWindow(arr, k) {
    if(arr.length < k) return null;

    let maxSum = 0;
    for(let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let sum = maxSum;

    for(let i = k; i < arr.length;i ++) {
        sum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

const arr = [1, 3, 2, 5, 7, 2, 4, 9, 1];
const k = 4;
console.log(FixSlidingWindow(arr, k)); // 출력: 22
