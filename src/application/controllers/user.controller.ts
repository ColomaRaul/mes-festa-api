import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/domain/decorators/get-user.decorator";
import { RoleProtected } from "src/domain/decorators/role-protected.decorator";
import { CreateUserDto, LoginUserDto } from "src/domain/dtos";
import { User } from "src/domain/entities/user.entity";
import { UserRoleGuard } from "src/domain/guards/user-role.guard";
import { ValidRoles } from "src/domain/interfaces";
import { UserService } from "src/domain/services/user.service";

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
    @RoleProtected(ValidRoles.superAdmin)
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