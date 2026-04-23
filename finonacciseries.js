function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;   // F(0)
    let curr = 1;   // F(1)

    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;  // sum of previous two
        prev = curr;             // shift prev forward
        curr = next;             // shift curr forward
    }

    return curr;
}
console.log(fibonacci(0));   // Output: 0
console.log(fibonacci(1));   // Output: 1
console.log(fibonacci(6));   // Output: 8