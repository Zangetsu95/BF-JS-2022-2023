const fruits = [
    {
        id: 1,
        name: 'Pomme',
        desc: 'La pomme est un fruit comestible produit par un pommier. Les pommiers sont cultivés à travers le monde et représentent l\'espèce la plus cultivée du genre Malus.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pomme_Schaffelder_%28Polierapfel%2C_Striefenapfel%29.jpg/330px-Pomme_Schaffelder_%28Polierapfel%2C_Striefenapfel%29.jpg',
        origin: 'Asie centrale'
    },
    {
        id: 2,
        name: 'Orange',
        desc: 'L’orange ou orange douce est le fruit de l\'oranger (Citrus sinensis L.) de la famille des Rutacées. Comme pour tous les agrumes, il s\'agit d\'une forme particulière de baie appelée hespéride. Il existe plusieurs variétés d’oranges, classées en quatre groupes variétaux.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Local_Orange_Variety_of_Kozan_-_Kozan_Yerli_Portakal_04.jpg/220px-Local_Orange_Variety_of_Kozan_-_Kozan_Yerli_Portakal_04.jpg',
        origin: null
    },
    {
        id: 3,
        name: 'Kiwi',
        desc: 'Les kiwis sont des fruits de plusieurs espèces de lianes du genre Actinidia, famille des Actinidiaceae. Ils sont originaires de Chine notamment de la province de Shaanxi. On en trouve par ailleurs dans des climats dits montagnards tropicaux. En France, les kiwis de l\'Adour sont les seuls à disposer d\'une indication géographique protégée (IGP) et d\'un label rouge.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',
        origin: 'Chine'
    }
]

export const fetchFruits = () => {
    return [...fruits]
}

export const fetchDetailFruit = (id) => {
    return fruits.find(f => f.id == id)
}