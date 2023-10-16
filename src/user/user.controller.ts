import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/user/dtos';
import { UserService } from './user.service';
import { CreateUserOrganizationDto } from './dtos/create-user-organization.dto';
import { Auth } from './decorators';
import { ValidRoles } from './interfaces';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token } = await this.userService.login(loginUserDto);
    const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      expires: twoHoursFromNow,
    });

    return { message: 'Success' };
  }

  @Post('organization')
  @Auth(ValidRoles.admin)
  add(@Body() createUserOrganization: CreateUserOrganizationDto) {
    return this.userService.addUserOrganization(createUserOrganization);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
  }

  @Get('test')
  test() {
    return { message: 'is a test' };
  }
}
