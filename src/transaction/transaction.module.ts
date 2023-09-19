import { Module } from "@nestjs/common";
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from "./entities/transaction.entity";
import { UserModule } from '../user/user.module';

@Module({
    controllers: [TransactionController],
    providers: [TransactionService],
    imports: [
        TypeOrmModule.forFeature([Transaction]),
        UserModule
    ]
})
export class TransactionModule {}