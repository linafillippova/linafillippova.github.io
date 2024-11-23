function gcd(a, b) {
    if (a < 0 || b < 0) {
        throw new Error("Оба числа должны быть неотрицательными");
    }

    while (b !== 0) {
        let temp = b; 
        b = a % b;   
        a = temp;    
    }

    return a; 
}


// Пример использования
console.log(gcd(48, 18)); 
console.log(gcd(101, 10)); 