    const {Contract} = require('./../models/contract-model')
    const {Status} = require('./../models/status-enum')

class ContractService {
    async getAll(){
        return await Contract.find()
    }

    async insert(contract) {
        if(!contract.hasOwnProperty("nome") ||
           !contract.hasOwnProperty("email") ||
           !contract.hasOwnProperty("CPF") ||
           !contract.hasOwnProperty("emprestimo")
        ){
            return "Não é possivel criar o contrato, por favor, informar os dados obrigatórios: Nome, E-mail, CPF e Valor do Empréstimo"
        }


        if(contract.nome.trim() == '' || 
           contract.email.trim() == '' || 
           contract.CPF.trim() == '' || 
           contract.emprestimo <= 0){
                return "Não é possivel criar o contrato, por favor, informar os dados obrigatórios: Nome, E-mail, CPF e Valor do Empréstimo"
           }

        const contrato = await Contract.find({ nome: contract.nome.trim().toUpperCase()  })
        
        if(contrato.length > 0){
            return "Não é possivel criar o contrato, o mesmo já existe"
        }

        contract.status = 1;
        contract.nome = contract.nome.trim().toUpperCase()
        return Contract.create(contract);
    }

    async update(contract) {
        const contrato = await Contract.findById(idContract)

        if(contract.email.trim() != ''){
            contrato.email = contract.email;
        }

        if(contract.renda_mensal.trim() != ''){
            contrato.renda_mensal = contract.renda_mensal;
        }

        if(contract.dt_nasc.trim() != ''){
            contrato.dt_nasc = contract.dt_nasc;
        }

        if(contract.estado_civil.trim() != ''){
            contrato.estado_civil = contract.estado_civil;
        }

        if(contract.endereco.trim() != ''){
            contrato.endereco = contract.endereco;
        }

        await contrato.save()
        return contrato
    }

    async addImage(idContract, Imagem) {
       const contrato = await Contract.findById(idContract)
 
       if(contrato.status > 2)
       {
           return `Não é possivel fazer upload de imagens, contrato está ${(Object.entries(Status).find(x => (x || [])[1] === contrato.status) || [])[0]}`
       }

       if((Imagem.docType == 1 || Imagem.docType == 2)){ contrato.status = 2 }
       contrato.imgs.push(Imagem)
       await contrato.save()
       return contrato
    }

    async approve(idContract) {
        const contrato = await Contract.findById(idContract)
        if(contrato.status != 2){
           return `Não é possivel aprovar o contrato, pois o mesmo está em fase ${(Object.entries(Status).find(x => (x || [])[1] === contrato.status) || [])[0]}`
        }
        contrato.status = 3

        await contrato.save()
        return contrato
     }

     async disapprove(idContract) {
        const contrato = await Contract.findById(idContract)
        if(contrato.status != 2){
            return `Não é possivel reprovar o contrato, pois o mesmo está em fase ${(Object.entries(Status).find(x => (x || [])[1] === contrato.status) || [])[0]}`
         }
        contrato.status = 4

        await contrato.save()
        return contrato
     }

}

module.exports = new ContractService();