
class De {
    public min: number
    public max : number
    constructor(max : number){
        this.min = 1
        this.max = max
    }

    lancer () : number {
        return Math.floor(Math.random() * this.max + this.min);
    }
}


export default De