const UserRepository = require('./../repositories/user-repository')


class UserService {

    findById(id) {
        return UserRepository.findById(id)
    }

    find() {
        return UserRepository.find()
    }

    findByLogin(login) {
        return UserRepository.findByLogin(login)
    }

    insert(user) {
        return UserRepository.insert(user)
    }
}

module.exports = new UserService()