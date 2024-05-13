import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Comanda.createMany([
      {mesa: '01', funcionarioId: 2, clienteId: 1, forma_pagamentoId: 'Débito', data_pagamento: new Date('2024-01-15')},
      {mesa: '02', funcionarioId: 2, clienteId: 2, forma_pagamentoId: 'Crédito', data_pagamento: new Date('2024-01-16')},
      {mesa: '03', funcionarioId: 2, clienteId: 2, forma_pagamentoId: 'Pix', data_pagamento: new Date('2024-02-01')}
    ])
  }
}