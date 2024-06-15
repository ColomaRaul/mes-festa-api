import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { TransactionModule } from './transaction/transaction.module';
import { SeedModule } from './seed/seed.module';
import * as process from 'process';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    HealthModule,
    UserModule,
    OrganizationModule,
    TransactionModule,
    SeedModule,
  ],
})
export class AppModule {}
