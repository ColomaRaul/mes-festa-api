import { Module } from "@nestjs/common";
import { AppController } from './controllers/app.controller';
import { AppService } from '../domain/services/app.service';
import { OrganizationController } from "./controllers/organization.controller";
import { OrganizationService } from "src/domain/services/organization.service";

@Module({
    controllers: [
        AppController,
        OrganizationController
    ],
    providers: [
        AppService,
        OrganizationService
    ]
})
export class ApplicationModule {}