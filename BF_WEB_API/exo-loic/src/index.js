const express = require('express')
const app = express()
const cryptoJs = require('crypto-js')
const secretKey = 'hello 123'


function encrypt(num) {
    let ciphertext = cryptoJs.AES.encrypt(num.toString(), secretKey).toString()
    return ciphertext
}

function decrypt(encryptedNum) {
    let bytes = cryptoJs.AES.decrypt(encryptedNum, secretKey)
    let decryptedNum = parseInt(bytes.toString(cryptoJs.enc.Utf8))
    return decryptedNum
}


app.use('/math', (req, res) => {
    const nb1 = parseInt(req.query.nb1)
    const nb2 = parseInt(req.query.nb2)
    const op = req.query.op


    let encryptedNb1 = encrypt(nb1)
    let encryptedNb2 = encrypt(nb2)
    let encryptedOp = 'cryptOperation'


    let decryptNb1 = decrypt(encryptedNb1)
    let decryptNb2 = decrypt(encryptedNb2)
    let decryptedOp = decrypt(encryptedOp)



    let result

    if (op == 'x' || op == 'fois' || op == '*') {
        result = decryptNb1 * decryptNb2
    }
    else if (op == '+' || op == 'plus') {
        result = decryptNb1 + decryptNb2
    }
    else if (op == '-' || op == 'moins') {
        result = decryptNb1 - decryptNb2
    }
    else if (op == '/' || op == 'divise') {
        result = decryptNb1 / decryptNb2
    } else {
        res.send("Opérateur pas bon.")
    }

    let decryptedResult = decrypt(result)

    res.send(`${decryptNb1} ${decryptedOp} ${decryptNb2} = ${result}`)


})

app.listen(3000, () => {
    console.log("Le serveur est lancé sur le port 3000")
})