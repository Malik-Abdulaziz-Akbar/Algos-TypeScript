const subsetSum = (arr: number[], sum: number): boolean => {
    const n = arr.length
    const dp: boolean[][] = new Array(n + 1).fill(false).map(
        () => new Array(sum + 1).fill(false));

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j]
            }
            else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][sum];
}


const set = [3, 34, 4, 12, 5, 2]
const sum1 = 9
const sum2 = 30

console.log(`Subset for ${sum1} is`, subsetSum(set, sum1))
console.log(`Subset for ${sum2} is`, subsetSum(set, sum2))