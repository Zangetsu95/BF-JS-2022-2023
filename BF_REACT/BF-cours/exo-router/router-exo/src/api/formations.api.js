const formations = [
    {
        id: 1,
        name: "JS FullStack",
        desc: "Acquérir les compétences fondamentales de développement web à la fois en Front end et Back end grâce à l’arsenal des technologies modernes de JavaScript tels que React, Vue.js et node.js.",
        image: "http://d1tvk6jrw60uvw.cloudfront.net/bucket/full-stack-javascript-developer.jpg"
    },
    {
        id: 2,
        name: "DevOps Engineer",
        desc: "Le DevOps est une pratique visant à l’unification du développement logiciel avec l’administration des infrastructures informatiques et qui permet des cycles de développement plus courts, une augmentation de la fréquence des déploiements et des livraisons continues, pour une meilleure atteinte des objectifs économiques de l'entreprise. Le but de la formation est de permettre aux participants d’acquérir les connaissances théoriques et des compétences pratiques afin de devenir DevOps Engineer.",
        image: "https://www.tibco.com/sites/tibco/files/media_entity/2021-04/Dev-ops-01.svg"
    },
    {
        id: 3,
        name: "Administrateur Linux",
        desc: "Les systèmes basés sur le noyau Linux sont en train de gagner du terrain, que ce soit dans les services cloud, le développement web et aussi de par les outils mis en œuvre dans l’approche DevOps et DevSecOps. Cette formation a pour but de répondre à la demande dans ce domaine en vous permettant d’acquérir des compétences suffisantes pour accéder à un emploi d’administrateur Systèmes dans un environnement Linux quel qu’il soit.",
        image: "https://www.ganatech.co.in/wp-content/uploads/2022/09/linux-admin-image.jpg"
    },
    {
        id: 4,
        name: "Développeur en Intelligence Artificielle",
        desc: "L'intelligence artificielle (IA) qui était, par le passé, de la science-fiction est en train d'étendre son influence dans de très nombreux domaines. L'IA est aujourd'hui utilisée pour vous donner la meilleure réponse dans Google, elle est un composant essentiel de Facebook en permettant de créer le meilleur fil d'actualité qui vous correspond…",
        image: "https://img-0.journaldunet.com/1e_28WHjuoZKlUo290hlvFrHDjk=/1500x/smart/f2b84f4bda27483b86a3e019bf041c81/ccmcms-jdn/24026992.jpg"
    }
]

export const fetchFormations = () => {
    return [...formations]
}


export const fetchDetailsFormations = (id) => {
    return formations.find(f => f.id == id)
}