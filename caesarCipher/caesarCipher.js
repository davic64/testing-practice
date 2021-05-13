function caesarCipher(word, num) {
    const finalWord = word.split("").map(letter => {
        return (/[a-zA-Z]/).test(letter) ? String.fromCharCode(((letter.charCodeAt() - 97 + num) % 26) + 97) : letter;
    })

    return finalWord.join("");
}

module.exports = caesarCipher;