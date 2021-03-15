module.exports = function toReadable (number) {
    let arrNum = (number + '').split('').map(function(element){
        return Number.parseInt(element);
    });

    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hundreds = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';

    if (1 == arrNum.length) {
        result = digits[number];
    }
    if (2 == arrNum.length && 20 > number) {
        result = tens[arrNum[arrNum.length - 1]];
    }
    if (2 == arrNum.length && 20 <= number && 100 > number) {
        if (arrNum[arrNum.length - 1] == 0) {
            result = hundreds[arrNum[0]];
        } else {
            result = hundreds[arrNum[0]] + ' ' + digits[arrNum[arrNum.length - 1]];
        }
    }
    if (3 == arrNum.length && 100 <= number && 1000 > number) {
        if (0 == (number % 10)) {
            result = digits[arrNum[0]] + ' ' + 'hundred' + ' ' + hundreds[arrNum[1]];
        }
        if (0 == arrNum[1]) {
            result = digits[arrNum[0]] + ' ' + 'hundred' + ' ' + digits[arrNum[arrNum.length - 1]];
        } 
        if (2 <= arrNum[1] && arrNum[arrNum.length - 1] != 0) {
            result = digits[arrNum[0]] + ' ' + 'hundred' + ' ' + hundreds[arrNum[1]] + ' ' + digits[arrNum[arrNum.length - 1]];
        } 
        if (1 == arrNum[1]) {
            result = digits[arrNum[0]] + ' ' + 'hundred' + ' ' + tens[arrNum[arrNum.length - 1]];
        }
        if (0 == (number % 100)) {
            result = digits[arrNum[0]] + ' ' + 'hundred';
        }
    }

    return result; 
}