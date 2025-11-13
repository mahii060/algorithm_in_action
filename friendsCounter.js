/*
* Problem statement:
You are given two large arrays. listA and listB. Each array contains user objects.
A user object is guaranteed to have an unique id property (a string) and may contain other data, such as name. 

Your task is to write an efficient function that takes both lists as input. And returns the total count of users that are present in both lists. 

*/

const USER_COUNT = 50000;
const usersA = [];
const usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` })

for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createUser(i));
    usersB.push(createUser(i + 25000));
}
// console.log(usersA);
// console.log(usersB);


const idListA = new Set(usersA.map(userA => userA.id));
// console.log(idListA);
const commonFriendsFast = (usersB) => {
    const startTime = performance.now()
    const commonFriends = [];
    usersB.forEach(userB => {
        if (idListA.has(userB.id)) {
            commonFriends.push(userB)
        }
    })

    const endTime = performance.now()
    return { count: commonFriends.length, timeTookToFinish: `${Math.floor(endTime - startTime) / 1000} seconds` }
}
console.log(commonFriendsFast(usersB));

// const commonFriendsSlow = (usersA, usersB) => {
//     const startTime = performance.now()
//     const commonFriends = [];

//     usersA.forEach(userA => {
//         usersB.forEach(userB => {
//             if (userA.id === userB.id) {
//                 commonFriends.push(userA)
//             }
//         })
//     })

//     const endTime = performance.now()

//     return { count: commonFriends.length, timeTookToFinish: `${Math.floor(endTime - startTime) / 1000} seconds` }
// }

// console.log(commonFriendsSlow(usersA, usersB));

