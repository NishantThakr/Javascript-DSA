function moveZero(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[j] = arr[i]
            j++
        }
    }
    for (let i = j; i < arr.length; i++) {
        arr[i] = 0
    }
}

function moveZeroes(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j++
        }
    }
    for (let i = j; i < arr.length; i++) {
        arr[i] = 0
    }
}


function secondLargetNumber(num) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLarget = Number.NEGATIVE_INFINITY

    for (let i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            secondLarget = largest
            largest = num[i]
        }
        else if (num[i] != largest && num[i] > secondLarget) {
            secondLarget = num[i]
        }
    }
    return secondLarget
}


console.log(secondLargetNumber([0, 1, 3, 12]))  