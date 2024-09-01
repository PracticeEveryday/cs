
function twoPointer(arr, x) {
    const sorted = arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    let count = 0;

    while (i < j) {
        const sum = arr[i] + arr[j];  // 현재 두 포인터의 합 계산

        if (sum === x) {  // 합이 x와 같으면
            count++;  // 카운트 증가
            i++;  // 왼쪽 포인터 증가
            j--;  // 오른쪽 포인터 감소

            // 동일한 숫자가 반복되지 않도록 중복 건너뛰기
            // 위에서 같을 경우 i++, j-- 를 했다
            // 이 때 이전 값과 같드면 하나 더 i++를 올려주는 것이다.
            // ✅ 사실 중복된 것을 없애고 시작해도 된다.
            while (i < j && arr[i] === arr[i - 1]) i++;
            while (i < j && arr[j] === arr[j + 1]) j--;
        } else if (sum > x) {  // 합이 x보다 크면
            j--;  // 오른쪽 포인터 감소
        } else {  // 합이 x보다 작으면
            i++;  // 왼쪽 포인터 증가
        }
    }


    return count;
}


// console.log(twoPointer([1, 2, 3, 4, 5], 6)); // 2
// console.log(twoPointer([5, 4, 3, 2, 1], 6)); // 2
// console.log(twoPointer([5, 2, 3, 4, 1], 6)); // 2

console.log(twoPointer([1, 2, 3, 4, 5, 1, 5, 3, 3], 6)); // 3
// console.log(twoPointer([-1, 0, 1, 2, -1, -4], 0)); // 1