import { alphabet, specialChar, emailTemplate } from "./const/functionsConst";

export function generateRandomLetterLowerCase(): string {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function generateRandomLetterUpperCase(): string {
    return alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)];
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getrandomString(length: number): string {
    let result: string = "";
    let characters: string = alphabet + alphabet.toUpperCase();
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getEmail(): string {
    let emailSplit: any = emailTemplate.split("@");
    return emailSplit[0] + getRandomInt(10000, 99999) + "@" + emailSplit[1];
}
export function getPassword(): string {
    let min: number = 0;
    let max: number = 9;
    let rand: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return generateRandomLetterLowerCase() + rand + generateRandomLetterUpperCase() + specialChar;
}

export function getFullName(): string {
    return getrandomString(getRandomInt(1, 14)) + " " + getrandomString(getRandomInt(1, 15));
}
