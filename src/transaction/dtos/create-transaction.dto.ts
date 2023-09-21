import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { TypeTransaction } from '../interfaces/type-transaction.interface';
import { Transform } from 'class-transformer';

export class CreateTransactionDto {
  @IsUUID()
  @IsOptional()
  userId: string;

  @IsUUID()
  userCreatorId: string;

  @IsUUID()
  organizationId: string;

  @IsEnum(TypeTransaction)
  typeTransaction: string;

  @IsString()
  @Transform(({ value }) => ('' + value).toUpperCase())
  typeFinancial: string;

  @IsInt()
  amount: number;

  @IsString()
  date: string;

  @IsString()
  @MinLength(5)
  description: string;
}
