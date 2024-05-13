import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {nome: 'João', cpf: 12365498700122, telefone: 550619852356471, email: 'joao@gmail.com'},
      {nome: 'Felipe', cpf: 12366998700453, telefone: 550619852300001, email: 'felipe@gmail.com'},
      {nome: 'Maria', cpf: 45665498700453, telefone: 5506199325356471, email: 'maria@gmail.com'},
      {nome: 'Fernanda', cpf: 96855498700453, telefone: 550619992356471, email: 'fernanda@gmail.com'}
    ])
  }
}