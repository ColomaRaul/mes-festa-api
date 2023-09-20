import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { OrganizationService } from '../organization/organization.service';
import { TransactionService } from '../transaction/transaction.service';
import { SEED_ORGANIZATION } from './data/organization.seed';
import { SEED_USER } from './data/user.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly userService: UserService,
    private readonly organizationService: OrganizationService,
    private readonly transactionService: TransactionService,
  ) {}
  async executeSeed() {
    await this.deleteTables();

    await this.insertNewOrganizations();
    await this.insertNewUsers();

    return 'Seed executed';
  }

  private async insertNewOrganizations() {
    const seedOrganization = SEED_ORGANIZATION;

    const insertPromises = [];
    seedOrganization.forEach((organization) => {
      insertPromises.push(this.organizationService.create(organization));
    });

    await Promise.all(insertPromises);
  }

  private async insertNewUsers() {
    const seedUsers = SEED_USER;
    const insertPromises = [];
    seedUsers.forEach((user) => {
      insertPromises.push(this.userService.create(user));
    });

    await Promise.all(insertPromises);
  }

  private async deleteTables() {
    await this.userService.deleteAllUsers();
    await this.userService.deleteAllUsersOrganization();
    await this.organizationService.deleteAllOrganizations();
    await this.transactionService.deleteAllTransactions();
  }
}
