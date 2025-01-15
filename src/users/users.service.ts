import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONNECTION } from '../database/constants';
import * as usersSchema from '../db/schema/users';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly connection: NodePgDatabase<typeof usersSchema>,
  ) {}

  async getUsers() {
    return this.connection.query.users.findMany();
  }
}
