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

console.log(`\nYELLING CHARS`)

function yellingChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = newString + string[count] + "!"
    }
    return newString
}

console.log(yellingChars("oh hello"))

console.log(`\nINDEXED CHARS`)

function indexedChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = newString + count + string[count]
    }
    return newString
}

console.log(indexedChars("bye"))

console.log(`\nNUMBERED CHARS`)

function numberedChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = `${newString}(${count + 1})${string[count]}`
    }
    return newString
}

console.log(numberedChars("bye"))

console.log(`\nEXCLAIM`)

function exclaim(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (string[count] === "?" || string[count] === ".") {
            newString = `${newString}!`
        } else {
            newString = `${newString}${string[count]}`
        }
    }
    return newString
}

console.log(exclaim("This is fine."))

console.log(`\nREPEAT IT`)

function repeatIt(string, n) {
    let newString = ""
    for (let count = 0; count < n; count++) {
        newString = newString + string
    }
    return newString
}

console.log(repeatIt("oh hi!", 8))

console.log(`\nTRUNCATE`)

function truncate(string) {
    let newString = ""
    if (string.length > 15) {
        for (let count = 0; count < 15; count++) {
            newString = `${newString}${string[count]}`
        }
        return `${newString}...`
    } else {
        return string
    }
}

console.log(truncate("Well, that's just, like, your opinion man."))

console.log(`\nCI EMAILIFY`)

function ciEmailify(name) {
    let newString = ""
    for (let count = 0; count < name.length; count++) {
        if (name[count] === " ") {
            newString = `${newString}.`
        } else {
            newString = `${newString}${name[count]}`
        }
    }
        return `${newString.toLowerCase()}@codeimmersives.com`
}

console.log(ciEmailify("Anthony DeRosa"))