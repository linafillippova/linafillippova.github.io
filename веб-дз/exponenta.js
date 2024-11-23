function pow(x, n) {
    if (n < 1 || !Number.isInteger(n)) {
        throw new Error("n должно быть натуральным числом");
    }
    let result = 1; 
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result; 
}

// Пример использования
console.log(pow(2, 4)); 
console.log(pow(7, 2)); 