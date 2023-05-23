import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn } from 'typeorm';

@ObjectType()
export class Banker {
  @Field()
  @Column({
    length: 10,
    unique: true,
  })
  employeeNumber: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @CreateDateColumn()
  updatedAt: Date;
}
