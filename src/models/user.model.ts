import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class UserModel extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  id!: number;

  @Column({ name: 'USER_FNAME' })
  firstName!: string;

  @Column({ name: 'USER_LNAME' })
  lastName!: string;

  @Column({ name: 'USER_EMAIL' })
  email!: string;

  @CreateDateColumn({ name: 'USER_CDATE' })
  creationDate!: Date;
}
