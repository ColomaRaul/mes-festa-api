import { Module } from "@nestjs/common";
import { AppController } from './controllers/app.controller';
import { AppService } from '../domain/services/app.service';
import { OrganizationController } from "./controllers/organization.controller";

@Module({
    controllers: [
        AppController,
        OrganizationController
    ],
    providers: [
        AppService
    ]
})
export class ApplicationModule {}