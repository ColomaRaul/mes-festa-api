import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Auth, GetUser } from '../user/decorators';
import { ValidRoles } from '../user/interfaces';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { User } from '../user/entities/user.entity';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @Auth(ValidRoles.admin)
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get('organization')
  @Auth(ValidRoles.admin)
  findByOrganization(
    @GetUser() user: User,
    @Query('organizationId') organizationId?: string,
  ) {
    return this.transactionService.findByOrganization(organizationId);
  }

  @Get('user-organization/:organizationId')
  @Auth(ValidRoles.user)
  findUserTransactionAndOrganization(
    @GetUser() user: User,
    @Param('organizationId') organizationId: string,
  ) {
    return this.transactionService.findUserTransactionAndOrganization(
      user.id,
      organizationId,
    );
  }
}
