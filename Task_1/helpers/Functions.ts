import { ALPHABET, SPECIAL_CHAR, EMAIL_TEMPLATE } from "./constantsForFunctions";
import { EMAIL_SEPARATOR, SPACE_INPUT } from "./expectedResults";

export function generateRandomLetterLowerCase(): string {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

export function generateRandomLetterUpperCase(): string {
    return ALPHABET.toUpperCase()[Math.floor(Math.random() * ALPHABET.length)];
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
    let result: string = SPACE_INPUT;
    let characters: string = ALPHABET + ALPHABET.toUpperCase();
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getEmail(): string {
    let emailSplit: any = EMAIL_TEMPLATE.split(EMAIL_SEPARATOR);
    return emailSplit[0] + getRandomInt(10000, 99999) + EMAIL_SEPARATOR + emailSplit[1];
}
export function getPassword(): string {
    let min: number = 0;
    let max: number = 9;
    let rand: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return generateRandomLetterLowerCase() + rand + generateRandomLetterUpperCase() + SPECIAL_CHAR;
}

export function getFullName(): string {
    return getRandomString(getRandomInt(1, 14)) + SPACE_INPUT + getRandomString(getRandomInt(1, 15));
}
