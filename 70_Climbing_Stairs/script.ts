// -------------------------Leetcode: 70. Climbing Stairs-------------------------------------------
/* You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

type Memo = {
  [key: number]: number;
};

const climbStairs = (n: number): number => {
  const memo: Memo = {};
  const count = (k: number): number => {
    if (memo[k]) return memo[k];
    if (k === 2) return 2;
    if (k <= 1) return 1;
    memo[k] = count(k - 1) + count(k - 2);
    return memo[k];
  };
  return count(n);
};

// eslint-disable-next-line no-console
console.log(climbStairs(5));

const climbStairs2 = (n: number): number => {
  const memo: Array<number> = [1, 1, 2];
  for (let i = 3; i <= n; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

// eslint-disable-next-line no-console
console.log(climbStairs2(5));

const climbStairs3 = (n: number): number => {
  let memo: Array<number> = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    const result: number = memo[0] + memo[1];
    memo = [memo[1], result];
  }
  return memo[1];
};

// eslint-disable-next-line no-console
console.log(climbStairs3(5));
