import { IsIn, IsString, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsIn(['fila', 'colla', 'barraca', 'falla', 'foguera', 'banda'])
  type: string;
}
