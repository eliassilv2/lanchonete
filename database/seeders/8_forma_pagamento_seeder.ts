import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await FormaPagamento.createMany([
      {id: 1, nome: 'Débito'},
      {id: 2, nome: 'Crédito'},
      {id: 3, nome: 'Pix'},
      {id: 4, nome: 'Dinheiro'}
    ])
  }
}