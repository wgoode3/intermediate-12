/*

intermediate 12

given a temperature in celcius, return the temperature in farhenheit

return an array of fibonacci numbers up to some number n

count the number of words in a string

given an array of numbers, return an array containing the square root of each value
return 0 for any values that would be NaN

given a string of words, return the words in opposite order
eg "Hello world" => "world Hello"

given an array arr and an index x, remove the value at x and shift the values over

given a value val and and index x and an array arr, move the values over 1 from index x
and add the value at index x

you're given two colors in the form (255, 0, 0) and (0, 0, 255) and a number between 0 and 1
using the number (eg. 0.3) find a number 30% of the way between color1 and color2

given a time in seconds (since midnight), return the angles of the minute and hour hand of a clock
8100 (2:15 AM) => {hour:60, minute: 90}

you are given a string that looks like '0b1011' return the decimal value (11)

given a number less than 16 n (eg 9) return a string that looks like '0b1001'

given a number less than 1000, return the number in words
639 => "six hundred thirty nine"
213 => "two hundred thirteen"

*/

// given a temperature in celcius, return the temperature in farhenheit

function toF(c){
    return c*9/5 + 32;
}

// console.log(toF(-40));

// return an array of fibonacci numbers up to some number n (n > 0)

function fibArr(n){
    var arr = [0, 1];
    for(let i=1; i<n; i++){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    return arr;
}

// console.log(fibArr(20));

// count the number of words in a string

const sentence = "count the number of words in a string";

function wordCount(sentence){
    let count = 0;
    let prev = " ";
    for(let letter of sentence){
        if(letter !== " " && prev === " "){
            count++;
        }
        prev = letter;
    }
    return count;
}

// console.log(wordCount(sentence));

// given an array of numbers, return an array containing the square root of each value
// return 0 for any values that would be NaN

function rootArr(arr){
    for(let i in arr){
        if (arr[i] >= 0) {
            arr[i] = Math.sqrt(arr[i]);
            // arr[i] = arr[i] ** 0.5;
            // arr[i] **= 0.5;
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}

// console.log(rootArr([16,9,3,-1,0,-4,256]));

// given a string of words, return the words in opposite order
// eg "Hello world" => "world Hello"

function reverseWords(sentence){
    let words = [];
    let prev = " ";
    let currentWord = "";
    for(let letter of sentence){
        if(prev === " " && letter !== " "){
            currentWord += letter;
        } else {
            words.push(currentWord);
            currentWord = "";
        }
    }
    words.push(currentWord);
    let newSentence = "";
    for(let i=words.length-1; i>=0; i--){
        newSentence += words[i];
        if(i !== 0){
            newSentence += " ";
        }
    }
    return newSentence;
}

console.log(reverseWords("Hello world"));

// given a time in seconds (since midnight), return the angles of the minute and hour hand of a clock
// 8100 (2:15 AM) => {hour:67.5, minute: 90}

function handAngles(time){
    // make sure not more than a day ignore AM/PM
    time %= 43200;
    hours = time / 3600;
    time %= 3600;
    // minutes = time/60;
    minutes = Math.floor(time / 60);
    // minutes = time / 60 >> 0;
    return {
        hour: 30*hours,
        minute: 6*minutes
    };
}

console.log(handAngles(8100));

// you are given a string that looks like '0b1011' return the decimal value (11)

function binToDec(bin){
    let dec = 0;
    for(let i=bin.length-1, exp=0; i>0; i--, exp++){
        if(bin[i] === "1"){
            dec += 2**exp;
        }else if(bin[i] === "b") {
            break;
        }
    }
    return dec;
}

console.log(binToDec('0b10011000'))