const { Router } = require('express')

const router = Router()

const supermarkets = [
    {
        store: 'carrefour',
    },
    {
        store: 'delhaize',
    }
]


router.get('', (req, res) => {
    res.send(supermarkets)
})




module.exports = router