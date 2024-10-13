import { subsetSum } from "./SubsetSum";

export const equalSumPartition = (arr: number[]): boolean => {
    const sum = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    if (sum % 2 === 1) {
        return false;
    }
    return subsetSum(arr, sum / 2);
}

// const arr = [1, 5, 11, 5]
// console.log("Result of EqualSumPartition", equalSumPartition(arr));