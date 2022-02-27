function checkNumber(value) {
    return value % 1 !== 0 ? 'not a interger' : (value % 2 === 0 ? 'even': 'odd');
}
console.log(checkNumber(12))