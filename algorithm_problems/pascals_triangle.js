// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const generate = (numRows) => {
    const arr = [];

    if (numRows === 0) return arr;

    arr.push([1]);

    for (let i = 1; i < numRows; i++) {
        const newArr = [];
        const prevArr = arr[i-1];

        for (let j = 0; j <= prevArr.length; j++) {
            const prev = prevArr[j - 1] ? prevArr[j - 1] : 0;
            const curr = prevArr[j] ? prevArr[j] : 0;
            newArr.push(prev + curr);
        }

        arr.push(newArr);

    }

    return arr;
};
