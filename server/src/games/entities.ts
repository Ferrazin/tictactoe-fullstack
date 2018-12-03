import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

export type Symbol = 'X' | 'O'

export type Board = [ Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null,  Symbol | null]

const emptyBoard: Board = [ null, null, null, null, null, null, null, null, null ]

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column('json', {default: emptyBoard})
  board: Board

  @Column({length:1, nullable: true})
  winner?: string

}

