import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrganizationService } from "src/organization/organization.service";
import { CreateOrganizationDto } from './dtos/create-organization.dto';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Post()
    create(@Body() createOrganizationDto: CreateOrganizationDto) {
        return this.organizationService.create(createOrganizationDto);
    }
}