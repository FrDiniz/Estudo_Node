const {executeQuery, executeQueryGetOne} = require("./connection")

class UserRepository {
    findById(id) {
        var query = `select top 1 * from dbo.TB_USUARIO where id = ${id}`
		return executeQueryGetOne(query)
    }
    
    findByLogin(login) {
        var query = `select top 1 * from dbo.TB_USUARIO where login = '${login}'`
		return executeQueryGetOne(query)
    }

    insert(user) {
        var query = `insert into TB_USUARIO 
                    (name, email, login, phone, password)
                    values
                    ('${user.name}', '${user.email}', '${user.login}', '${user.phone}', '${user.password}' )`
		return executeQuery(query)
    }
    find() {
        var query = "select * from dbo.TB_USUARIO"
		return executeQuery(query)
    }
}

module.exports = new UserRepository();
