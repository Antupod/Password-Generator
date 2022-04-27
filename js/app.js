function generatePassword() {
    const allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!:|&+#<-_~';
    const passwordContainer = document.querySelector('.password');
    const scrollingNumberCharacters = document.getElementById('range');
    
    const password = [
        {
            name: document.getElementById('uppercase'),
            symbols: allSymbols.slice(0, 26)
        },
        {
            name: document.getElementById('lowercase'),
            symbols: allSymbols.slice(27, 53)
        },
        {
            name: document.getElementById('numbers'),
            symbols: allSymbols.slice(52, 62)
        },
        {
            name: document.getElementById('symbols'),
            symbols: allSymbols.slice(63, 75)
        }
    ];
    

    let symbolsUsed = '';
    let generatedPassword = '';

    // validate checkboxes which have been selected
    for (let i = 0; i < password.length; i++) {
        if (password[i].name.checked) {
            symbolsUsed += password[i].symbols;
        }
    }

    // generating a password from user-selected characters
    for (let i = 0; i < scrollingNumberCharacters.value; i++) {
        let randomNum = Math.floor(Math.random() * symbolsUsed.length);
        generatedPassword += symbolsUsed.substring(randomNum, randomNum + 1);
    }

    passwordContainer.textContent = (generatedPassword == '') ? "You didn't choose anything" : generatedPassword;
}

document.querySelector('.button').addEventListener("click", generatePassword);



