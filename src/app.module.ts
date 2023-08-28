import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './domain/entities/organization.entity';
import { OrganizationService } from './domain/services/organization.service';
import { AppService } from './domain/services/app.service';
import { AppController } from './application/controllers/app.controller';
import { OrganizationController } from './application/controllers/organization.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      Organization
    ])
  ],
  controllers: [
    AppController,
    OrganizationController
  ],
  providers: [
    AppService,
    OrganizationService
  ],
  exports: [
    OrganizationService
  ]
})
export class AppModule {}
