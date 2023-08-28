import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "src/domain/dtos/create-user.dto";
import { UserService } from "src/domain/services/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    register(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }
}