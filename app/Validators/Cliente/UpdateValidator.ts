import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    cpf: schema.string.optional({ trim: true }),
    telefone: schema.string.optional({ trim: true }),
    celular: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
