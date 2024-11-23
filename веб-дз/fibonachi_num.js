function fibb(n) {
    if (n < 0 || !Number.isInteger(n) || n > 1000) {
        throw new Error("n должно быть неотрицательным целым числом и не превышать 1000");
    }

    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    }

    let fib = [0, 1]; 

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }

    return fib[n]; 
}

// Примеры использования 
console.log(fibb(10));  
console.log(fibb(1000)); 