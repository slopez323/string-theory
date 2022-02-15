console.log(`XIFY`)

function xify(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString += "x"
        // console.log(newString)
    }
    return newString
}

console.log(xify("hi there"))

console.log(`\nYELLINGCHARS`)

function yellingChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = newString+string[count]+"!"
    }
    return newString
}

console.log(yellingChars("oh hello"))