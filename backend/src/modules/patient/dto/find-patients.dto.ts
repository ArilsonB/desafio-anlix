import { ApiProperty } from '@nestjs/swagger';

export class FindPatientsDto {
  @ApiProperty({
    description: 'Search patient by name',
  })
  search?: string = '';
}
