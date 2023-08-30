import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { GetUser } from "./decorators/get-user.decorator";
import { CreateUserDto, LoginUserDto } from "src/user/dtos";
import { User } from "./entities/user.entity";
import { ValidRoles } from "./interfaces";
import { UserService } from "./user.service";
import { Auth } from "./decorators";

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
    @Auth(ValidRoles.user)
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