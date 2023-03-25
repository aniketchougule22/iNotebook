const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).send({ status: false, statusCode: 400, message: 'something went wrong..!' });
    }
});

module.exports = router;