export function generateRandomLetterLowerCase() {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function generateRandomLetterUpperCase() {
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomString(length: number) {
    let result: string = "";
    let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//
export function email() {
    let email: string = "your.email@gmail.com";
    let emailSplit: any = email.split("@");
    return emailSplit[0] + getRandomInt(10000, 99999) + "@" + emailSplit[1];
}
export function password() {
    let min: number = 0;
    let max: number = 9;
    let rand: any = Math.floor(Math.random() * (max - min + 1)) + min;
    return generateRandomLetterLowerCase() + rand + generateRandomLetterUpperCase() + "<,.(*$/%_-@'!~`:?";
}

export function fullName() {
    return randomString(getRandomInt(1, 14)) + " " + randomString(getRandomInt(1, 15));
}
