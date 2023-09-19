import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dtos/create-organization.dto';

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
}
