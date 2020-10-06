const express = require('express');
const router = express.Router();
const ContractService = require('./../../services/contract-service')

router.get('/contract', async (req, res) => {
    try {
        const lstContract = await ContractService.getAll()
        
        res.json(
            lstContract.map((c) => {
                return {
                    nome:c.nome,
                    imgs: c.imgs
                }
            })
        )
    } catch (error) {
        res.status(500).send({
            errors: error,
            message: 'Erro ao consultar os contratos'
        })
    }
})

router.get('/contract/detalhado', async (req, res) => {
    try {
        const lstContract = await ContractService.getAll()
        
        res.json(
            lstContract
        )
    } catch (error) {
        res.status(500).send({
            errors: error,
            message: 'Erro ao consultar os contratos'
        })
    }
})

router.delete('/contract/all', async (req, res) => {
    try {
        await ContractService.deleteAll()
        res.send(200)
    } catch (error) {
        res.status(500).send({
            errors: error,
            message: 'Erro ao consultar os contratos'
        })
    }
})

router.post('/contract', async (req, res) => {
    try {
        console.log(req.body)
        let result = await ContractService.insert(req.body)
        console.log(result)
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            errors: error,
            message: 'Erro ao inserir o contrato'
        })
    }
})

router.post('/contract/imagem', async (req, res) => {
    try {

        let idContract = req.body.idContract
        let data = {
            label: req.body.label,
            imagem: req.body.imagem
        }

        console.log({ data })

        let result = await ContractService.addImage(idContract, data)
        console.log({ result })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            errors: error,
            message: 'Erro ao inserir imagem contrato'
        })
    }
})

module.exports = router