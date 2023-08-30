import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './domain/entities/organization.entity';
import { OrganizationService } from './domain/services/organization.service';
import { AppService } from './domain/services/app.service';
import { AppController } from './application/controllers/app.controller';
import { OrganizationController } from './application/controllers/organization.controller';
import { UserService } from './domain/services/user.service';
import { UserController } from './application/controllers/user.controller';
import { User } from './domain/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './domain/strategies/jwt.strategy';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    TypeOrmModule.forFeature([
      Organization,
      User
    ]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h'
          }
        }
      }
    })
  ],
  controllers: [
    AppController,
    OrganizationController,
    UserController
  ],
  providers: [
    AppService,
    OrganizationService,
    UserService,
    JwtStrategy
  ],
  exports: [
    OrganizationService,
    JwtStrategy,
    PassportModule,
    JwtModule
  ]
})
export class AppModule {}
