import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { OrganizationService } from '../organization/organization.service';
import { TransactionService } from '../transaction/transaction.service';
import { SEED_ORGANIZATION } from './data/organization.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly userService: UserService,
    private readonly organizationService: OrganizationService,
    private readonly transactionService: TransactionService,
  ) {}
  async executeSeed() {
    await this.insertNewOrganizations();

    return 'Seed executed';
  }

  private async insertNewOrganizations() {
    await this.organizationService.deleteAllOrganizations();

    const seedOrganization = SEED_ORGANIZATION;

    const insertPromises = [];
    seedOrganization.forEach((organization) => {
      insertPromises.push(this.organizationService.create(organization));
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
