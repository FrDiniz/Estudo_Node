const express = require("express");
const router = express.Router();
const ContractService = require("./../../services/contract-service");

router.get("/", async (req, res) => {
  try {
    const lstContract = await ContractService.getAll();

    res.json(lstContract);
  } catch (error) {
    res.status(500).send({
      errors: error,
      message: "Erro ao consultar os contratos",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let result = await ContractService.insert(req.body);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      errors: error,
      message: "Erro ao inserir o contrato",
    });
  }
});

router.post("/image", async (req, res) => {
  try {
    let idContract = req.body.idContract;
    let data = {
        docType: req.body.docType,
        image: req.body.image,
    };

    console.log({ data });

    let result = await ContractService.addImage(idContract, data);
    console.log({ result });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      errors: error,
      message: "Erro ao inserir imagem contrato",
    });
  }
});

router.post("/update", async (req, res) => {
    try {
      let idContract = req.body.idContract;

      let result = await ContractService.update(idContract);
      console.log({ result });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        errors: error,
        message: "Erro ao atualizar dados do contrato",
      });
    }
  });

router.post("/approve", async (req, res) => {
    try {
      let idContract = req.body.idContract;

      let result = await ContractService.approve(idContract);
      console.log({ result });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        errors: error,
        message: "Erro ao aprovar contrato",
      });
    }
  });

  router.post("/disapprove", async (req, res) => {
    try {
      let idContract = req.body.idContract;

      let result = await ContractService.disapprove(idContract);
      console.log({ result });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        errors: error,
        message: "Erro ao reprovar contrato",
      });
    }
  });

module.exports = router;
