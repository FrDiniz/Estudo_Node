const ContractRepository = require('./../repositories/contract-repository')

class ContractService {
    async deleteAll(){
        return ContractRepository.deleteAll()
    }

    async getAll() {
        return ContractRepository.getAll()
    }

    async insert(contract) {
        return ContractRepository.insert(contract)
    }
    async addImage(idContract, Imagem) {
        return await ContractRepository.addImage(idContract, Imagem)
    }
}

module.exports = new ContractService();