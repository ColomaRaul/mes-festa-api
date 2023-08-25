import { Module } from "@nestjs/common";
import { EntitiesModule } from './entities/entities.module';
import { AppService } from './services/app.service';


@Module({
    imports: [
        EntitiesModule
    ],
    providers: [
        AppService
    ]
})
export class DomainModule {}