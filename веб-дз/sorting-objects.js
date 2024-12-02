function getSortedArray(array, key) {
    const sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        sortedArray[i] = array[i];
    }

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j][key] > sortedArray[j + 1][key]) {
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

const data = [
    { name: "Polina", age: 20 },
    { name: "Nastya", age: 18 },
    { name: "Sasha", age: 19 }
];

const sortedByName = getSortedArray(data, "name");
console.log(sortedByName);
const sortedByAge = getSortedArray(data, "age");
console.log(sortedByAge);