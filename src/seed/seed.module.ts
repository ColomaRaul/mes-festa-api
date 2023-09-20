import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { UserModule } from '../user/user.module';
import { OrganizationModule } from '../organization/organization.module';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [UserModule, OrganizationModule, TransactionModule],
})
export class SeedModule {}
