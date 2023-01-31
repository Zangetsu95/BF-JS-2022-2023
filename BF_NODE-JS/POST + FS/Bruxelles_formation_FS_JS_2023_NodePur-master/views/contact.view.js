function getHtml()
{
    return `
        <form method="POST">
            <input name="email" type="email" placeholder="Votre Email" value="baudouxloic@gmail.com"><br>
            <input name="passowrd" type="password"><br>
            <textarea name="message">Tutu bonjour</textarea><br>
            <button type="submit">Envoyer votre message</button><br>
        </form>
    `
}

module.exports = getHtml