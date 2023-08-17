const knex = require("../database/knex")
const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExist = await knex("users").where({ email:email })
    
    if (checkUserExist.length) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8)
  
    const [id] = await knex("users").insert({
      name,
      email,
      password:hashedPassword
    })

    response.status(201).json()
  }
}

module.exports = UserController