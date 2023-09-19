import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Organization } from './entities/organization.entity';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
    controllers: [OrganizationController],
    providers: [OrganizationService],
    imports: [
        TypeOrmModule.forFeature([Organization]),
        UserModule
    ]
})
export class OrganizationModule {}