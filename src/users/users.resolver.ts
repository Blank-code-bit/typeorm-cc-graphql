import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './input/create-client.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => Client)
  createClient(
    @Args('createClientData') createClientData: CreateClientInput,
  ): Promise<Client[]> {
    return this.usersService.createClient(createClientData);
  }
}
