import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";
import { PassportModule } from '@nestjs/passport';

@Module({
    controllers: [UserController],
    providers: [UserService, JwtStrategy],
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([User]),
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.registerAsync({
            imports: [ ConfigModule ],
            inject: [ ConfigService ],
            useFactory: ( configService: ConfigService ) => {
              return {
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                  expiresIn:'2h'
                }
              }
            }
        })
    ],
    exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule]
})
export class UserModule {}