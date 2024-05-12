import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

      await Produto.createMany([
        {nome:'Coca-Cola lata', preco: 6.5, tamanho: '300ml', tipoId: 1},
        {nome:'Coca-Cola 2l', preco: 10, tamanho: '2l', tipoId: 1},
        {nome:'Coca-Cola 600', preco: 8, tamanho: '600ml', tipoId: 1},
        {nome:'Coca-Cola ks', preco: 6.5, tamanho: '290ml', tipoId: 1},
        
        {nome:'X-Tudo', preco: 10, tipoId: 2},
        {nome:'X-Tudo Master', preco: 15, tipoId: 2},
        {nome:'X-Picanha', preco: 10, tipoId: 2},

        {nome:'Brownie', preco: 10, tipoId: 3},
        {nome:'Sorvete', preco: 8, tipoId: 3},
        {nome:'Açai', preco: 10, tipoId: 3},

        {nome:'Hot Dog Classico', preco: 10, tipoId: 4},
        {nome:'Hot Dog na Chapa', preco: 9, tipoId: 4},
        {nome:'Hot Dog ao Molho', preco: 8, tipoId: 4},

        {nome:'Batata Frita P', preco: 8, tipoId: 5},        
        {nome:'Batata Frita M', preco: 9, tipoId: 5},        
        {nome:'Batata Frita G', preco: 10, tipoId: 5},        
      ])


  }
}