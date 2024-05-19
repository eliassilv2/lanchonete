import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cargo from './cargo.js'
import Comanda from './comanda.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare cpf: number
 
  @column()
  declare endereco: string
 
  @column()
  declare sexo: string
 
  @column()
  declare telefone: number
 
  @column()
  declare cargoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cargo)
  declare cargo: BelongsTo<typeof Cargo>

  @belongsTo(()=>Comanda)
  declare comandas: BelongsTo<typeof Comanda>
}