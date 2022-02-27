function roundedDown(value) {
    return value % 1 === 0 ? value: Math.floor(value / 1)
}
console.log(roundedDown(3,1415))