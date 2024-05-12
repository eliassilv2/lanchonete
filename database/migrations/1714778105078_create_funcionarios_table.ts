import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.decimal('cpf', 14).notNullable()
      table.string('endereco', 100).notNullable()
      table.string('sexo', 1).notNullable()
      table.decimal('telefone', 15).notNullable()
      table.string('cargo_id', 45).unsigned().references('id').inTable('cargos').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}