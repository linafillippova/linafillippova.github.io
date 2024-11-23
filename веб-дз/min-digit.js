function minDigit(x) {
    if (x < 0 || !Number.isInteger(x)) {
        throw new Error("x должно быть неотрицательным целым числом");
    }

    let min = 9; // Максимально возможная цифра

    while (x > 0) {
        let digit = x % 10; 
        if (digit < min) {
            min = digit; 
        }
        x = (x - digit) / 10; 
    }

    return min; // Возвращаем наименьшую цифру
}


// Пример использования
console.log(minDigit(1893)); 
console.log(minDigit(203)); 