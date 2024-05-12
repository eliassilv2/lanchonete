import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {id: 1, nome: 'Pão com gergilim', descricao:'Pão caseiro feito em casa'},
      {id: 2, nome: 'Hamburguer de picanha', descricao:'200g de carne suculenta'},
      {id: 3, nome: 'Alface', descricao:'Alface colhidos nos montes suíços'},
      {id: 4, nome: 'Maionse'},
      {id: 5, nome: 'Bacon'},
    ])
  }
}