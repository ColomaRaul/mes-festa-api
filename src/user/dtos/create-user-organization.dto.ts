import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Characteristic } from '../interfaces';

export class CreateUserOrganizationDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  organizationId: string;

  @IsString()
  @IsOptional()
  memberSince: string;

  @IsOptional()
  characteristics: Characteristic[];
}
