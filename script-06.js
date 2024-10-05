{/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */}

// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for the first element

//         let j = i + 1;
//         let k = nums.length - 1;

//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k];
//             if (sum === 0) {
//                 result.push([nums[i], nums[j], nums[k]]);

//               Skip duplicate values for the second and third elements
//                 while (j < k && nums[j] === nums[j + 1]) j++;
//                 while (j < k && nums[k] === nums[k - 1]) k--;

//                 j++;
//                 k--;
//             } else if (sum < 0) {
//                 j++; // Move the left pointer to the right to increase the sum
//             } else {
//                 k--; // Move the right pointer to the left to decrease the sum
//             }
//         }
//     }

//     return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for j

            let k = j + 1;
            let l = nums.length - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);

                    // Skip duplicates for k and l
                    while (k < l && nums[k] === nums[k + 1]) k++;
                    while (k < l && nums[l] === nums[l - 1]) l--;

                    k++;
                    l--;
                } else if (sum < target) {
                    k++; // Increase sum by moving k forward
                } else {
                    l--; // Decrease sum by moving l backward
                }
            }
        }
    }
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));


