const UserService = require('./../../services/user-service')
const express = require('express');
const router = express.Router();
const HTTPStatus = require('http-status');

router.get('/user', (req, res, next) => {
    res.json({
        "error": false,
        "message": "USER IS WORKING"
    });
});

router.post('/user', async (req, res) => {
    try {
        const createdUser = await UserService.insert(req.body)
        res.json({
            data: createdUser
        })
    } catch (error) {

        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send({
            error: true,
            errors: error,
            message: "Não foi possivel cadastrar usuário"
        })

    }
})

module.exports = router;