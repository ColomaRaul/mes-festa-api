import { Module } from "@nestjs/common";
import { AppController } from './controllers/app.controller';
import { AppService } from '../domain/services/app.service';

@Module({
    controllers: [
        AppController
    ],
    providers: [
        AppService
    ]
})
export class ApplicationModule {}