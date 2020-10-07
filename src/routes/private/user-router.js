
const express = require('express');
const router = express.Router();
const UserService = require('./../../services/user-service')


router.get('/user', async (req, res, next) => {

    try {

        let list = await UserService.find()

        res.json({
            data: list
        });

    } catch (error) {
        res.status(500).send({
            errors: error,
            message: 'Erro ao listar usuários'
        })
    }
});

router.get('/user/:id', async (req, res, next) => {

    try {

        let list = await UserService.findById(req.params.id)

        res.json({
            data: list
        });

    } catch (error) {
        res.status(500).send({
            errors: error,
            message: 'Erro aom liostar o usuário...'
        })
    }
});

module.exports = router