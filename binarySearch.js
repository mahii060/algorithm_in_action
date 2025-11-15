// binary search

const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = arr[mid]

        if (guess === target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;

        }
        else {
            high = mid - 1;
        }
    }
    return -1;

}

// console.log(binarySearch([2, 3, 5, 9, 13, 31, 41, 54], 54));;

// generate only once
const arr = [
    5, 12, 18, 24, 31, 37, 42, 48, 55, 63,
    71, 78, 84, 91, 99, 106, 113, 121, 129, 136,
    144, 151, 159, 166, 174, 182, 189, 197, 204, 212,
    219, 227, 234, 242, 249, 257, 264, 272, 279, 287,
    294, 302, 309, 317, 324, 332, 339, 347, 354, 362
];

// console.log(arr);

const binarySearch2 = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    console.log(low, high);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        // console.log("guess: ", guess);
        // console.log("mid: ", mid);
        if (guess === target) {
            return `The index of target is ${mid}, target number is ${target} `
        }
        else if (guess > target) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return { message: `${target} doesn't exist in the array`, status: false }
}

console.log(binarySearch2(arr, 339));
