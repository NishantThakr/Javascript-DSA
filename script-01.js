//************************************ */ PALINDROME NUMBER **************************************
// return x < 0 ? false : x === +x.toString().split("").reverse().join('')

// const result = myPalindrome(10101)

// console.log(result);

//************************************** */ FIBONACCI SERIES *****************************

var fib = function (n) {
    const arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    // console.log(arr)
}
// fib(10)

//****************************** ANAGRAM A STRING ************************ */

const anagram = function (s, t) {
    // s = s.split("").sort().join('')
    // console.log(s);

    // t = t.split("").sort().join('')
    // console.log(t);

    // return s == t ? true : false

    if (s.length !== t.length) { return false }
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true
}
// console.log(anagram("anagram", "nagaram"))


//***************************** SUM OF TWO NO. MATCH TARGET **************************************** */

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
}
// console.log(twoSum([1, 7, 10, 5], 12))

//******************************** OCCURENCE OF ELEMENTS ****************************************** */

const str = "qwertyuioplkjhgfdsazxcvbnmklpoiuytrewqasdfghjklmbnvrgghdjkbfdnbjbgivhvyuyeuyernuiyeihggbjbnvbnmfdbrfhihr"

const charCount = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
}, {})

const singleCharCount = str.split('').filter(item => item === "n").length

// console.log(charCount, singleCharCount);

//************************************ FIND INTERSECTION & UNION OF NUMBER ************************************** */

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [2, 4, 6, 8, 10]

const intersection = arr1.filter(item => new Set(arr2).has(item))

const union = [...new Set([...arr1, ...arr2])]

// console.log(intersection, union)

//********************************************* MAX NO. OF ARR *************************************************** */


const arr = [1, 1, 2, 34, 46, 68, 4, 3, 4, 1, 3, 4, 1]

const maxNum = Math.max(...arr)

// console.log(maxNum)

//****************************************  ************************************ */

const twoSum2 = function (nums, target) {
    var obj = {}
    for (let i = 0; i < nums.length; i++) {
        var n = nums[i]
        if (obj[target - n] >= 0) {
            return [obj[target - n], i]
        }
        else {
            obj[n] = i
        }
    }
}
// console.log(twoSum2([2, 7, 11, 15], 9))





// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))



var plusOne = function (digits) {

    return digits + 1
};

// console.log(plusOne(123))

const funnyNumber = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (i === 3) {
            return num[i]
        }
    }
}

const sumOperation = (n) => {
    return (n * (n + 5)) / 2
}
// console.log(sumOperation(23));



const score = [24, 35, 33, 2342, 5, 4354, 332, 422, 3]
// console.time(funnyNumber(score));
// console.log(funnyNumber(score));
// console.timeEnd(funnyNumber(score));



const AddNum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(AddNum([1, 2, 3, 4, 5]));

const funkyNumber = (n) => {
    const array = []
    for (let i = 0; i <= n; i++) {
        array.push(i * 10)
    }
    return array
}
console.log(funkyNumber(5));
