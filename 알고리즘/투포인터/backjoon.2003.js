/**
 * N개의 수로 된 수열 A[1], ... A[N] 존재
 * i번째 수부터 j번째 수의 합이 M이 되는 경우의 수를 구하는 프로그램을 짜자
 */

// let arr = [1, 2, 3, 4, 2, 5, 3, 1, 1, 2]
// let M = 5
const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(v => +v);

let count = 0;

for(let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let j = i;

    while (sum < M && j < arr.length-1) {
        j++;
        sum += arr[j];
    }
    if (sum === M) count++;
}

console.log(count);