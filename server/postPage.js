const express = require('express')

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

router.post('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})


module.exports = router





//