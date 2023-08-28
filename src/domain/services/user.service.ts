import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    private readonly logger = new Logger('UserService');

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(createUserDto: CreateUserDto) {
        try {
            const user = this.userRepository.create(createUserDto);
            await this.userRepository.save(user);

            return user;
        } catch (error) {
            console.log(error);
            this.logger.error(error);
        }
    }

    findAll() {

    }

    findOne(id: string) {

    }

    update() {

    }

    remove() {

    } 
}