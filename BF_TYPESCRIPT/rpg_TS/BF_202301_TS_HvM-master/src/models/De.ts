/** Classe représentant un dé */
class De {

    min: number;
    max: number;

    /**
     * Créer un dé
     * @param {number} max Valeur maximum que peut retourner le dé
     */
    constructor (max: number) {
        this.min = 1;
        this.max = max;
    }

    /**
     * Permet de lancer un dé avec un minimum de 1 et un maximum définit
     * @returns {number} Valeur aléatoire comprise entre le minimum et maximum
     */
    lancer (): number {
        return Math.floor(Math.random() * this.max + this.min);
    }
}

export default De;