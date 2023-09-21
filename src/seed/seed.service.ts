import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { OrganizationService } from '../organization/organization.service';
import { TransactionService } from '../transaction/transaction.service';
import { SEED_ORGANIZATION } from './data/organization.seed';
import { SEED_USER } from './data/user.seed';
import { SEED_USER_ORGANIZATION } from './data/user-organization.seed';
import { SEED_TRANSACTION } from './data/transaction.seed';

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
    await this.insertNewUsersOrganization();
    await this.insertNewTransactions();

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

  private async insertNewUsersOrganization() {
    const seedUserOrganization = SEED_USER_ORGANIZATION;
    const insertPromises = [];
    seedUserOrganization.forEach((userOrganization) => {
      insertPromises.push(
        this.userService.addUserOrganization(userOrganization),
      );
    });
  }

  private async insertNewTransactions() {
    const seedTransaction = SEED_TRANSACTION;
    const insertPromises = [];
    seedTransaction.forEach((transaction) => {
      insertPromises.push(this.transactionService.create(transaction));
    });
  }

  private async deleteTables() {
    await this.userService.deleteAllUsers();
    await this.userService.deleteAllUsersOrganization();
    await this.organizationService.deleteAllOrganizations();
    await this.transactionService.deleteAllTransactions();
  }
}
