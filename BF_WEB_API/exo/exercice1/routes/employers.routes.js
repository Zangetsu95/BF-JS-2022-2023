const express = require('express');
const db = require('../db/db')

const router = express.Router()

router.get("/", (req, res) => {
    const employers = db.employers

    res.json(employers)
})

router.get('/:id', (req, res) => {
    const employer = db.employers.find(employer => employer.id == req.params.id)
    if(employer){
        res.json(employer)
    } 

    res.status(404)
    res.send('employer non trouver')
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const address = req.body.address

    if(db.employers.some(employer => employer.id == id) && address){
        let employerMod
        const newEmployers = db.employers.map(employer => {
            if(employer.id == id){
                employer.address = address 
                employerMod = employer
            }
            return employer
        })
        db.employers = newEmployers
        res.json(employerMod)

    }else {
        res.status(404)
        res.send('employer non trouver')
    }

})

router.delete('/:id',(req, res) => {
    const employersFiltrer = db.employers.filter(employer => employer.id != req.params.id)
    const employerLicensier = db.employers.find(employer => employer.id == req.params.id)
    db.employers = employersFiltrer

    console.log(db.employers)

    if(employerLicensier){
        res.json(employerLicensier)
        return
    } 

    res.status(404)
    res.send('employer non trouver')
} )

router.put('/:id/augmenter', (req, res) => {
    const id = req.params.id
    const augmentation = +req.query.augmentation || +req.body.augmentation
    const employer = db.employers.find(employer => employer.id == id)

    if(!isNaN(augmentation) && augmentation>0 && employer){
        employer.salaire += augmentation
        res.json(employer)
    } else{
        res.send('mauvaise données')
    }
})

router.put('/:id/diminuer', (req, res) => {
    const id = req.params.id
    const diminution = +req.query.diminution|| +req.body.diminution
    const employer = db.employers.find(employer => employer.id == id)

    if(!isNaN(diminution) && diminution>0 && employer){
        employer.salaire -= diminution
        if(employer.salaire < 0) employer.salaire = 0
        res.json(employer)
    } else{
        res.send('mauvaise données')
    }
})

module.exports = router