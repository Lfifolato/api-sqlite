import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import { CreateValidator } from 'App/Validators/Cliente'

export default class ClientesController {
  public async index({ response }: HttpContextContract) {
    const res = await Cliente.query().orderBy('id', 'desc')
    //const res = await Database.from('teste')

    return response.ok(res)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const cliente = await Cliente.create(data)

    return response.ok(cliente)
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Cliente.findOrFail(params.id)

    if (!data) {
      return response.badRequest('Falha na busca')
    }

    return response.ok(data)
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
