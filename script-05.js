// var secodHighest = (arr) => {
//     var a1 = -1
//     var a2 = -1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > a1) {
//             a2 = a1
//             a1 = arr[i]
//         } else if (arr[i] !== a1 && arr[i] > a2) {
//             a2 = arr[i]
//         }
//     }
//     return a2
// }

// console.log(secodHighest([1, 2, 3, 4, 5, 6, 7, 8, 9]))


const rotateArr = (nums, k) => {
    let size = nums.length
    if (size < k) {
        size = size % k
    }
    const rotated = nums.splice(size - k, size)
    nums.unshift(...rotated)
    return nums
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
