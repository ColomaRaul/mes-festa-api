import { Body, Controller, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Auth } from '../user/decorators';
import { ValidRoles } from '../user/interfaces';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @Auth(ValidRoles.admin)
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }
}
