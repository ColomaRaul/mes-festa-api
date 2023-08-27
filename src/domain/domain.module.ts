import { Module } from "@nestjs/common";
import { EntitiesModule } from './entities/entities.module';
import { AppService } from './services/app.service';
import { OrganizationService } from "./services/organization.service";


@Module({
    imports: [
        EntitiesModule
    ],
    providers: [
        AppService,
        OrganizationService
    ]
})
export class DomainModule {}