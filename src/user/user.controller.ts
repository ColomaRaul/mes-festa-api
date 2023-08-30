import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/user/decorators/get-user.decorator";
import { RoleProtected } from "./decorators/role-protected.decorator";
import { CreateUserDto, LoginUserDto } from "src/user/dtos";
import { User } from "src/user/entities/user.entity";
import { UserRoleGuard } from "src/user/guards/user-role.guard";
import { ValidRoles } from "./interfaces";
import { UserService } from "./user.service";

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

    @Get('testing')
    @RoleProtected(ValidRoles.user)
    @UseGuards(AuthGuard(), UserRoleGuard)
    testing(
        @GetUser() user: User,
    ) {
        return {
            ok: true,
            message: 'hola mundo private',
            user
        };
    }
}