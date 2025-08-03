// sum_to_n_a: Iterative approach (loop)
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
// Time: O(n), Space: O(1)


// sum_to_n_b: Recursive approach
function sum_to_n_b(n: number): number {
  if (n <= 1) return n;
  return n + sum_to_n_b(n - 1);
}
// Time: O(n), Space: O(n) due to call stack


// sum_to_n_c: Mathematical formula
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}
// Time: O(1), Space: O(1)
