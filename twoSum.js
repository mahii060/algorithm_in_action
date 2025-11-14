// Problem statement:Given an array of numbers and a target value, the task is to find two numbers in the array whose sum equals the target. If there is no solution then return undefined;

// You may assume that each input would have exactly one solution, you may not use the same element twice. If there is no solution return undefined

// Expected time complexity O(n)

// ? Input : [2,11,7,15] and 9;
// ? Output: [0,2] (because 2 + 7 = 9)

const twoSum = (arr, target) => {
    const numbersMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        if (numbersMap.has(complement)) {
            return [numbersMap.get(complement), i]
        }

        numbersMap.set(currentNumber, i);
        console.log(numbersMap);
    }
    return { message: "No array element found to fulfil the operation of two sum", status: undefined }
}

console.log(twoSum([3, 50, 9, 10, 4, 11, 6], 11));


const twoSum1 = (arr, target) => {
    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        console.log(`Current Number: ${currentNumber}`);
        console.log(`Complement: ${complement}`);

        if (numMap.has(complement)) {
            return [numMap.get(complement), i]
        }
        numMap.set(currentNumber, i)
        console.log(numMap);
    }
    return { message: "This array doesn't support two sm", result: undefined }

}
// console.log(twoSum1([2, 11, 7, 15, 5, 6, 8, 3, 1, 4], 9));