import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dtos/create-organization.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class OrganizationService {
  private readonly logger = new Logger('OrganizationService');
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    try {
      const organization = this.organizationRepository.create(
        createOrganizationDto,
      );
      await this.organizationRepository.save(organization);

      return organization;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('HELP!');
    }
  }

  async findByUser(user: User) {
    try {
      return this.organizationRepository
        .createQueryBuilder('organization')
        .leftJoinAndSelect('organization.userOrganizations', 'userOrganization')
        .where('userOrganization.userId = :userId', { userId: user.id })
        .getRawMany();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        'Error to find organization by user',
      );
    }
  }

  async deleteAllOrganizations() {
    const query =
      this.organizationRepository.createQueryBuilder('organization');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('Cant delete all organizations');
    }
  }
}
