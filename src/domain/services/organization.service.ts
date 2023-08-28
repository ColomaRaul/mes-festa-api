import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Organization } from "../entities/organization.entity";
import { CreateOrganizationDto } from '../entities/value_object/create-organization.dto';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>,
    ) {}

    async create(createOrganizationDto: CreateOrganizationDto) {
        try {
            const organization = this.organizationRepository.create(createOrganizationDto);
            await this.organizationRepository.save(organization);

            return organization;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('HELP!');
        }
    }
}