import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrganizationService } from "./organization.service";
import { Auth } from "../user/decorators";
import { ValidRoles } from "../user/interfaces";
import { CreateOrganizationDto } from './dtos/create-organization.dto';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Post()
    @Auth(ValidRoles.superAdmin)
    create(@Body() createOrganizationDto: CreateOrganizationDto) {
        return this.organizationService.create(createOrganizationDto);
    }
}