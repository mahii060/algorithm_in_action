const dataCache = new Map();

const expensiveTask = (id) => {
    console.log("Ran the expensive task", id);
    return { id: id, data: `Some data for id: ${id}`, timestamp: new Date().getTime() }
}

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("Cache hit for", id);
        return dataCache;
    }
    console.log("Cache missed for", id);
    const data = expensiveTask(id)
    console.log(dataCache);
    dataCache.set(id, data)
    return dataCache
}

console.log(getData(123));
console.log(getData(123));
// console.log(getData(111));   
// console.log(getData(333));