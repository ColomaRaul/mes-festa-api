import { Injectable } from "@nestjs/common";
import { CreateOrganizationDto } from '../entities/value_object/create-organization.dto';

@Injectable()
export class OrganizationService {
    create(createOrganizationDto: CreateOrganizationDto): string {
        return 'created'
    }
}