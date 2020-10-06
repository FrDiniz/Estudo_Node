const { Contract } = require('./../models/contract-model')

class ContractRepository {
    async deleteAll() {
        return Contract.deleteMany({})
    }

    async getAll() {
        return Contract.find({})
    }

    async getTeste(){
        return Contract.find({})
    }

    async insert(contract) {
        return Contract.create(contract)
    }


    async update(_id, contract) {
        return Contract.updateOne({ _id }, contract)
    }

    async addImage(idContract, Imagem) {
        return new Promise((resolve, reject) => {
            debugger
            Contract.findOne({ _id: idContract }).then(contract => {

                contract.imgs.push(Imagem)


                this.update(idContract, contract).then(retorno => {
                    // checklist.save().then(retorno => {

                    resolve(retorno)
                }).catch(err => {

                    reject(err)
                });

            }).catch(err => {

                reject(err)
            });
        });
    }
}

module.exports = new ContractRepository();