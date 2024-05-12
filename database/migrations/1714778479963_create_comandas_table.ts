import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa', 45)
      table.string('funicionario_id').unsigned().references('id').inTable('funcionarios')
      table.string('cliente_id').unsigned().references('id').inTable('clientes')
      table.string('forma_pagamento_id', 45).unsigned().references('id').inTable('forma_pagamentos')
      table.decimal('data pgto', 10)
      table.decimal('data', 10)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}