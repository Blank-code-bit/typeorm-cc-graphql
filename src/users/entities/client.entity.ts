import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn } from 'typeorm';

@ObjectType()
export class Client {
  @Field()
  @Column({ type: 'numeric' })
  balance: number;

  @Field()
  @Column({
    name: 'active',
    default: true,
  })
  isActive?: boolean;

  @Field()
  @Column({
    type: 'simple-json',
    nullable: true,
  })
  age: number;
  hairColor: string;

  @Field()
  @Column({ type: 'simple-array', default: [] })
  familyMembers: string;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @CreateDateColumn()
  updatedAt: Date;
}
