import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome: 'Orion', cpf: 12345678900, endereco: 'qnn 10', sexo: 'M', telefone: 61994566613, cargoId: 1},
      {nome: 'Elias', cpf: 61516546548, endereco: 'qnn 18', sexo: 'M', telefone: 61984235678, cargoId: 2},
      {nome: 'Ana', cpf: 84984651321, endereco: 'qnn 31', sexo: 'F', telefone: 61993568478, cargoId: 3}
    ])
  }
}