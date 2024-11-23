function pluralizeRecords(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("n должно быть неотрицательным целым числом");
    }
    let form;
    let verb; 
    if (n === 1) {
        form = "запись"; 
        verb = "была найдена"; 
    } else {
        if (n % 10 === 1 && n % 100 !== 11) {
            form = "запись"; 
        } else if ((n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20)) {
            form = "записи"; 
        } else {
            form = "записей";
        }
        verb = "было найдено";
    }
    return `В результате выполнения запроса ${verb} ${n} ${form}`;
}

// Примеры использования
console.log(pluralizeRecords(1));  
console.log(pluralizeRecords(2));  
console.log(pluralizeRecords(5));  