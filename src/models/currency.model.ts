import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CURRENCY')
export class CurrencyModel extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'CURRE_ID' })
  id!: number;

  @Column({ name: 'CURRE_ISO' })
  iso!: string;

  @Column({ name: 'CURRE_SYMBO' })
  symbol!: string;

  @Column({ name: 'CURRE_NAME' })
  name!: string;
}
