export const minimumDifferenceSubsetSum = (arr: number[]): number => {
    const n = arr.length
    const sum = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    
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
    const sumArr: number[] = []
    for(let i = 0; i< sum + 1; i++){
        if(dp[n][i] === true){
            sumArr.push(i);
        }
    }
    let diff = Number.MAX_VALUE;
    for (let j = Math.floor(sum / 2); j >= 0; j--) {
        if (dp[n][j]) {
            diff = sum - 2 * j;
            break;
        }
    }
    return diff;
}

// const testArr = [1,6,1,5]
// console.log("The Minimum difference of 2 sets is " + minimumDifferenceSubsetSum(testArr));