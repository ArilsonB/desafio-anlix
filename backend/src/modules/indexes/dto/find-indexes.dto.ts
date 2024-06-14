import { ApiProperty } from '@nestjs/swagger';

export class FindIndexesDto {
  @ApiProperty()
  date: string;
}
