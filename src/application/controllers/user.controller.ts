import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "src/domain/dtos";
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

}