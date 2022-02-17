module.exports = function toReadable(number) {
    const arr20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const text = number.toString();
    console.log(text);
    if (number === 0) {
        return 'zero';
    }
    if (number < 20) {
        return arr20[number];
    } else if (number >= 20 && number < 100) {
        if (text[1] === '0') {
            return tens[text[0]];
        } else {
            return tens[text[0]] + ' ' + arr20[text[1]];
        }
    }
    //100-999
    else if (number >= 100 && number < 1000) {
        if (text[1] === '0' && text[2] === '0') {
            return arr20[text[0]] + ' hundred';
        } else if (text[1] === '1') {
            return arr20[text[0]] + ' hundred ' + arr20[Number(text[1] + text[2])];
        } else if (text[1] === '0') {
            return arr20[text[0]] + ' hundred ' + arr20[text[2]];
        } else if (text[2] === '0') {
            return arr20[text[0]] + ' hundred ' + tens[text[1]];
        } else {
            return arr20[text[0]] + ' hundred ' + tens[text[1]] + ' ' + arr20[text[2]];
        }
    }
};
