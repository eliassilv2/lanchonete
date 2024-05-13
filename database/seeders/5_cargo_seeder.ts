import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([
      {id: 1, nome: 'Gerente'},
      {id: 2, nome: 'Atendente'},
      {id: 3, nome: 'Chapeiro(a)'}

    ])
  }
}