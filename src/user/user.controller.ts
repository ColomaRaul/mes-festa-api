import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/user/dtos';
import { UserService } from './user.service';
import { CreateUserOrganizationDto } from './dtos/create-user-organization.dto';
import { Auth } from './decorators';
import { ValidRoles } from './interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @Post('organization')
  @Auth(ValidRoles.admin)
  add(@Body() createUserOrganization: CreateUserOrganizationDto) {
    return this.userService.addUserOrganization(createUserOrganization);
  }
}
