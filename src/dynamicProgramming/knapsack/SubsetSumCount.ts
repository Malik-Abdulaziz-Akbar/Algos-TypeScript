export const subsetSumCount = (arr: number[], sum: number): number => {
    const n = arr.length
    const dp: number[][] = new Array(n + 1).fill(0).map(
        () => new Array(sum + 1).fill(0));

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]
            }
            else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][sum];
}

// const arr = [2, 3, 5, 6, 8, 10]
// console.log("Subset Sum Count of sum 10 = ", subsetSumCount(arr, 10))