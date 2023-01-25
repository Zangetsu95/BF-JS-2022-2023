function toBoolean() {
    switch (this?.toLowerCase()?.trim()) {
        case "true":
        case "yes":
        case "oui":
        case "y":
        case "t":
        case "o":
        case "1":
            return true;

        case "false":
        case "no":
        case "f":
        case "n":
        case "0":
        case null:
        case undefined:
            return false;

        default:
            return JSON.parse(stringValue);
    }
}

String.prototype.toBoolean = toBoolean