import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger('TransactionService');
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    try {
      const transaction =
        this.transactionRepository.create(createTransactionDto);

      await this.transactionRepository.save(transaction);

      return transaction;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Transaction cannot be created!');
    }
  }

  //TODO: Paginate
  async findAll() {
    return this.transactionRepository.find({});
  }

  async findByOrganization(organizationId: string) {
    return this.transactionRepository.findBy({ organizationId });
  }

  async deleteAllTransactions() {
    const query = this.transactionRepository.createQueryBuilder('transaction');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('Cant delete all transactions');
    }
  }

  async findUserTransactionAndOrganization(
    userId: string,
    organizationId: string,
  ) {
    return this.transactionRepository.findBy({ userId, organizationId });
  }
}
