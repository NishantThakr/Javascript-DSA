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


// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
function rotateArray(nums, k) {
    let size = nums.length;

    if (size > k) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, size); // [5, 6, 7]
    nums.unshift(...rotated);

    return nums;
}

// Time Complexity - O(n)
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Optimised Approach
function rotateArrayOptimised(nums, k) {
    let size = nums.length;

    if (size > k) {
        k = k % size;
    }

    reverse(nums, 0, nums.length - 1); // O(n)
    reverse(nums, 0, k - 1); // O(k)
    reverse(nums, k, nums.length - 1); // O(n-k)

    return nums;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));