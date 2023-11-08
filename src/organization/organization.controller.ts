import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Auth, GetUser } from '../user/decorators';
import { ValidRoles } from '../user/interfaces';
import { CreateOrganizationDto } from './dtos/create-organization.dto';
import { User } from '../user/entities/user.entity';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  @Auth(ValidRoles.superAdmin)
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get('by-user')
  @Auth(ValidRoles.superAdmin, ValidRoles.admin, ValidRoles.user)
  getByUser(@GetUser() user: User) {
    return this.organizationService.findByUser(user);
  }
}
