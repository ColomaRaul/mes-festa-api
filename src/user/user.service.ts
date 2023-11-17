import {
  Injectable,
  Logger,
  InternalServerErrorException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dtos';
import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces';
import { JwtService } from '@nestjs/jwt';
import { CreateUserOrganizationDto } from './dtos/create-user-organization.dto';
import { UserOrganization } from './entities/user-organization.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserOrganization)
    private readonly userOrganizationRepository: Repository<UserOrganization>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;

      return {
        ...user,
        access_token: this.getJwtToken({
          id: user.id,
          email: user.email,
          name: user.fullName(),
          roles: user.roles,
        }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        email: true,
        password: true,
        id: true,
        roles: true,
        name: true,
        surname: true,
      },
    });

    if (!user) throw new UnauthorizedException('Credentials are not valid');

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentials are not valid (password)');

    return {
      access_token: this.getJwtToken({
        id: user.id,
        email: user.email,
        name: user.fullName(),
        roles: user.roles,
      }),
      id: user.id,
      email: user.email,
      name: user.fullName(),
      roles: user.roles,
    };
  }

  async addUserOrganization(
    createUserOrganizationDto: CreateUserOrganizationDto,
  ) {
    try {
      const userOrganization = this.userOrganizationRepository.create(
        createUserOrganizationDto,
      );
      await this.userOrganizationRepository.save(userOrganization);

      return userOrganization;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        'Cant assign user to organization',
      );
    }
  }

  async deleteAllUsers() {
    const query = this.userRepository.createQueryBuilder('user');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('Cant delete all users');
    }
  }

  async deleteAllUsersOrganization() {
    const query =
      this.userOrganizationRepository.createQueryBuilder('user-organization');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException(
        'Cant delete all users organization',
      );
    }
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);
    this.logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
