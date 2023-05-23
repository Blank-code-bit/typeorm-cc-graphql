import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './input/create-client.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  public createClient(createClientInput: CreateClientInput): Promise<Client[]> {
    let createClient = this.clientRepository.create(createClientInput);
    return this.clientRepository.save(createClient);
  }
}
