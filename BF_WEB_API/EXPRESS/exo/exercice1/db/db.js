class Db {
    employers = [
        {
            id: 1,
            nom: 'Rayn',
            address: 'av de terv 185',
            salaire: 1500
        },
        {
            id: 2,
            nom: 'Antho',
            address: 'gare du midi 12',
            salaire: 1500
        },
        {
            id: 3,
            nom: 'Jean',
            address: 'dans mon pet',
            salaire: 1500
        }
    ]
    factures = [
        {
            id: 1,
            facture: 140
        },
        {
            id: 2,
            facture: 235
        },
        {
            id: 3,
            facture: 1487
        }
    ]
    clients = [
        {
            id: 1,
            nom: 'Rayn',
            commandes: [
                {
                    id: 1,
                    facture: 140 
                },
                {
                    id: 2,
                    facture: 235
                }
            ]
        },
        {
            id: 2,
            nom: 'Antho',
            commandes: [
                {
                    id: 3,
                    facture: 140 
                },
                {
                    id: 4,
                    facture: 235
                }
            ]
        },
        {
            id: 3,
            nom: 'Jean',
            commandes: [
                {
                    id: 5,
                    facture: 140 
                },
                {
                    id: 6,
                    facture: 235
                }
            ]
        }

        
    ]
}

const db =  new Db()

module.exports = db