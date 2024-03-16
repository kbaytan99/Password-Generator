/*
  * Write a program that is capable of generating passwords randomly.
  * You can configure generating passwords with the following parameters:
  * - Length: Between 8 and 16.
  * - With or without capital letters.
  * - With or without numbers.
  * - With or without symbols.
  * (Being able to combine all these parameters with each other)
  */


// Parameters
const Length = {
    max: 16,
    min: 8
}

function randomPasswordGenerate() {
    let password = "";
    //
    const maxLengthRandom = (Math.random() * ((Length.max) - (Length.min)) + Length.min).toFixed(0)
    //
    console.log("Password Max Length: " + maxLengthRandom);
    //
    for(passwordChar = 0; passwordChar <= maxLengthRandom; passwordChar++){
        
        const randomPasswordContains = (Math.random() * 3).toFixed(0);
        console.log("RandomPassordChoose: " + randomPasswordContains)

        if(randomPasswordContains === "0") {
            console.log("Password Contains Capital Letter")
            const randomUppercaseLetter = Math.floor(Math.random() * 26);
            const numberToChar = String.fromCharCode(65 + randomUppercaseLetter).toUpperCase();
            password += numberToChar
            console.log('Password Line: ' + passwordChar + ' Contains: ' + numberToChar);
            continue;
        } 

        if(randomPasswordContains === "1"){
            console.log("Password Contains Capital Letter");
            const randomLetter = Math.floor(Math.random() * 26);
            const numberToChar = String.fromCharCode(65 + randomLetter).toLocaleLowerCase();
            password += numberToChar;
            console.log('Password Line: ' + passwordChar + ' Contains: ' + numberToChar);
            continue;
        }

        if(randomPasswordContains === "2"){
            console.log("Password Contains Number");
            const randomNumber = (Math.random() * 9).toFixed(0);
            password += randomNumber;
            console.log('Password Line: ' + passwordChar + ' Contains: ' + randomNumber);
            continue;
        }

        if(randomPasswordContains === "3"){
            console.log("Password Contains Symbol");
            const symbols = ['@', '/', '|', '"', '\\', '(', '&', '·', "$"];
            const randomSymbolNumber = (Math.random() * (symbols.length - 1)).toFixed(0);
            password += symbols[randomSymbolNumber];
            console.log('Password Line: ' + passwordChar + ' Contains: ' + randomSymbolNumber);
            continue;
        }

    }
console.log(password);
return password;
}


randomPasswordGenerate();