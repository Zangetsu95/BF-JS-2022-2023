const country = [
    {
        "id": 1,
        "nom": "France",
        "description": "Un pays d'Europe occidentale célèbre pour ses villes historiques, sa culture et sa gastronomie",
        "image": null,
        "destinations": [
            {
                "id": 1,
                "nom": "Paris",
                "description": "La ville des amoureux et de la gastronomie",
                "image": null,
                "tendance": true
            },
            {
                "id": 2,
                "nom": "Lyon",
                "description": "Une ville historique connue pour sa cuisine et son architecture",
                "image": null,
                "tendance": false
            },
            {
                "id": 3,
                "nom": "Marseille",
                "description": "Une ville portuaire animée et culturelle",
                "image": null,
                "tendance": false
            }
        ]
    },
    {
        "id": 2,
        "nom": "Japon",
        "description": "Un pays insulaire d'Asie de l'Est célèbre pour sa technologie avancée, sa culture et ses temples",
        "image": null,
        "destinations": [
            {
                "id": 1,
                "nom": "Tokyo",
                "description": "Une mégalopole animée connue pour sa technologie et sa culture",
                "image": null,
                "tendance": true
            },
            {
                "id": 2,
                "nom": "Kyoto",
                "description": "Une ville historique célèbre pour ses temples et son artisanat traditionnel",
                "image": null,
                "tendance": true
            },
            {
                "id": 3,
                "nom": "Osaka",
                "description": "Une ville portuaire animée connue pour sa cuisine et son architecture",
                "image": null,
                "tendance": false
            },
            {
                "id": 4,
                "nom": "Hiroshima",
                "description": "Une ville célèbre pour son histoire et son mémorial de la paix",
                "image": null,
                "tendance": true
            },
            {
                "id": 5,
                "nom": "Nara",
                "description": "Une ville historique connue pour ses temples et ses cerfs",
                "image": null,
                "tendance": true
            },
            {
                "id": 6,
                "nom": "Sapporo",
                "description": "Une ville célèbre pour son festival de la neige et sa bière",
                "image": null,
                "tendance": true
            },
            {
                "id": 7,
                "nom": "Fukuoka",
                "description": "Une ville portuaire animée connue pour sa cuisine et sa culture",
                "image": null,
                "tendance": false
            }
        ]
    },
    {
        "id": 3,
        "nom": "États-Unis",
        "description": "Un pays d'Amérique du Nord célèbre pour sa culture, sa diversité et ses paysages",
        "image ": "",
        "destinations": [
            {
                "id": 1,
                "nom": "New york",
                "description": "une grosse ville mdr",
                "image": null,
                "tendance": true,
            },
            {
                "id": 2,
                "nom": "Los angeles",
                "description": "la ville de TUPAC",
                "image": null,
                "tendance": false
            },
        ]
    }
]

export const fetchCountry = () => {
    return [...country]
}

export const fetchDetailsCountry = (id) => {
    return country.find(c => c.id == id)
}

export const fetchDestinationCountry = (idCountry, idDestination) => {
    const country = fetchDetailsCountry(idCountry);
    if (country) {
        if (idDestination) {
            return country.destinations.find(d => d.id === idDestination);
        } else {
            return country.destinations;
        }
    }
    return null;
}

// export const nbDestinations = () => {
//     country.forEach((c) => {
//         const numDestinations = c.destinations.length;
//     });
// }

export const tendances = () => {
    const tendancesArray = [];
    country.forEach((c) => {
        c.destinations.forEach((d) => {
            if (d.tendance) {
                tendancesArray.push({
                    pays: c.nom,
                    destination: d.nom,
                    description: d.description,
                    image: d.image,
                });
            }
        });
    });
    return tendancesArray;
};
