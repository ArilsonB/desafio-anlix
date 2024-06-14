import { ApiProperty } from '@nestjs/swagger';

export class FindPatientsDto {
  @ApiProperty()
  search?: string = '';
}
