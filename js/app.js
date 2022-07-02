function generatePassword() {
    const allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!:|&+#<-_~';
    const passwordContainer = document.querySelector('.password');
    const scrollingNumberCharacters = document.querySelector('#range');

    const lettersIndex = 26;
    const numbersIndex = 36;
    const symbolsIndex = 46;

    const password = [
        {
            name: document.getElementById('uppercase'),
            symbols: allSymbols.slice(0, lettersIndex)
        },
        {
            name: document.getElementById('lowercase'),
            symbols: allSymbols.slice(0, lettersIndex).toLowerCase()
        },
        {
            name: document.getElementById('numbers'),
            symbols: allSymbols.slice(lettersIndex, numbersIndex)
        },
        {
            name: document.getElementById('symbols'),
            symbols: allSymbols.slice(numbersIndex, symbolsIndex)
        }
    ];

    let symbolsUsed = '';
    let generatedPassword = '';

    for (let i = 0; i < password.length; i++) {
        if (password[i].name.checked) {
            symbolsUsed += password[i].symbols;
        }
    }

    for (let i = 0; i < scrollingNumberCharacters.value; i++) {
        let randomNum = Math.floor(Math.random() * symbolsUsed.length);
        generatedPassword += symbolsUsed.substring(randomNum, randomNum + 1);
    }

    passwordContainer.textContent = (generatedPassword === '')
        ? "You didn't choose anything"
        : generatedPassword;
}

document.querySelector('.button').addEventListener("click", generatePassword);



