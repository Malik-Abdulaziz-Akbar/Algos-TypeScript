const knapsackRecursive = (weights: number[], items: number[], capacity: number, n: number): number => {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (weights[n - 1] <= capacity) {
        const maximumValue = Math.max(
            items[n - 1] + knapsackRecursive(weights, items, capacity - weights[n - 1], n - 1),
            knapsackRecursive(weights, items, capacity, n - 1)
        );
        return maximumValue;
    }
    return knapsackRecursive(weights, items, capacity, n - 1);
}

const knapsackRecursiveMemoized = (weights: number[], items: number[], capacity: number, n: number, dp: number[][]): number => {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (dp[n][capacity] !== -1) {
        return dp[n][capacity]
    }
    if (weights[n - 1] <= capacity) {
        const maximumValue = Math.max(
            items[n - 1] + knapsackRecursive(weights, items, capacity - weights[n - 1], n - 1),
            knapsackRecursive(weights, items, capacity, n - 1)
        );
        return maximumValue;
    }
    return knapsackRecursive(weights, items, capacity, n - 1);
}

const knapsackTopDown = (weights: number[], items: number[], capacity: number, n: number): number => {
    const dp: number[][] = new Array(n + 1).fill(0).map(
        () => new Array(W + 1).fill(0)
    );
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < capacity + 1; j++) {
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(
                    items[i - 1] + dp[i - 1][j - weights[i - 1]],
                    dp[i - 1][j]
                );
            }
            else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][capacity];
}

const profit = [60, 100, 120];
const weight = [10, 20, 30];
const W = 50;
const n = profit.length;


let start = performance.now()
console.log("Recursive Approach Result: ", knapsackRecursive(weight, profit, W, n));
let end = performance.now()
let timeTaken = end - start;
console.log("Function took " + timeTaken + " milliseconds");


const dp: number[][] = new Array(n + 1).fill(-1).map(
    () => new Array(W + 1).fill(-1)
);
start = performance.now()
console.log("Memoized Approach Result: ", knapsackRecursiveMemoized(weight, profit, W, n, dp));
end = performance.now()
timeTaken = end - start;
console.log("Function took " + timeTaken + " milliseconds");

start = performance.now()
console.log("Topdown Approach Result: ", knapsackTopDown(weight, profit, W, n));
end = performance.now()
timeTaken = end - start;
console.log("TopDown Function took " + timeTaken + " milliseconds");
