function rotateArr(num, k) {
    let size = num.length
    if (size > k) {
        k = k % size
    }
    const rotated = num.splice(size - k, size)
    num.unshift(...rotated)
    return num
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.length);

console.log(rotateArr(arr, 8));


var rotate = function (nums, k) {
    let size = nums.length;

    // Handle cases where k > size by reducing k
    k = k % size;

    // Reverse helper function
    const reverse = (arr, start, end) => {
        while (start < end) {
            // Swap elements at start and end
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(nums, 0, size - 1);

    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Step 3: Reverse the remaining elements
    reverse(nums, k, size - 1);

    return nums;
};
