const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = number.every((prev, item) => {
    return item > 3
}, 0)
console.log(newNums);
