import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ProdutoIngrediente.createMany([
      {produtoId: 7, IngredienteId: 1}
    ])
  }
}