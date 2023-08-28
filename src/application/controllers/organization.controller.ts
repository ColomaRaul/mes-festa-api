import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrganizationService } from "src/domain/services/organization.service";
import { CreateOrganizationDto } from '../../domain/dtos/create-organization.dto';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Post()
    create(@Body() createOrganizationDto: CreateOrganizationDto) {
        return this.organizationService.create(createOrganizationDto);
    }
}