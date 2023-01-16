
const VOWELS     = ["a", "e", "i", "o", "u"];
const CONSONANTS = ["b", "c", "d", "f","g", "h","j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]                    


/**
* Determine if is a vowel
* @param {string} data - Data string with character to check
* @return {boolean} - True or False
*
*/
function isVowel(data){
    return VOWELS.includes(data.toLowerCase());
}


/**
* Determine if is a consonant
* @param {string} data - Data string with character to check
* @return {boolean} - True or False
*
*/
function isConsonant(data){
    return CONSONANTS.includes(data.toLowerCase());
}


/**
* Count vowels of a given string
* @param {string} str - Data string with vowels to count
* @return {number} - The number of vowels
*
*/
function countVowels(str){
    const wordsList = str.toLowerCase().split("");
    let numberOfVowels = 0;
    wordsList.forEach(str => {
        if(isVowel(str)){
            numberOfVowels++;
        }
    });
    return numberOfVowels;
}


/**
* Count consonants of a given string
* @param {string} str - Data string with consonants to count
* @return {number} - The number of consonants
*
*/
function countConsonants(str){
    const wordsList = str.replace(" ", "").toLowerCase().split("");
    let numberOfConsonants = 0;
    wordsList.forEach(str => {
        if(isConsonant(str)){
            numberOfConsonants++;
        }
    });
    return numberOfConsonants;

}

module.exports = {
    isVowel,
    isConsonant,
    countVowels,
    countConsonants
}