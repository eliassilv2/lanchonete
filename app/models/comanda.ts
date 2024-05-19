import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import FormaPagamento from './forma_pagamento.js'
import Funcionario from './funcionario.js'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare forma_pagamentoId: string

  @column()
  declare data_pagamento: Date

  @column()
  declare data: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cliente)
  declare clientes: BelongsTo<typeof Cliente>

  @belongsTo(()=>FormaPagamento)
  declare formaPagamento: BelongsTo<typeof FormaPagamento>

  @belongsTo(()=>Funcionario)
  declare funcionarios: BelongsTo<typeof Funcionario>
}