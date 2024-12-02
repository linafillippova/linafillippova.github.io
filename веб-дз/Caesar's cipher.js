function cesar(str, shift, action) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const alphabetLength = alphabet.length;
    let result = "";

    if (action === 'decode') {
        shift = -shift; 
    }

    for (let char of str) {
        const index = alphabet.indexOf(char.toLowerCase()); 

        if (index !== -1) { 
            let newIndex = (index + shift) % alphabetLength; 
            if (newIndex < 0) newIndex += alphabetLength; 
            result += char === char.toUpperCase() ? 
                      alphabet[newIndex].toUpperCase() : 
                      alphabet[newIndex];
        } else {
            result += char; 
        }
    }

    return result;
}

const encryptedMessage = "эзтыхз фзъзъз";
const decryptedMessage = cesar(encryptedMessage, 8, 'decode');
console.log(decryptedMessage); // хакуна матата