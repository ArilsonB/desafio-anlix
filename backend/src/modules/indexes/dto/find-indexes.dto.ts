import { ApiProperty } from '@nestjs/swagger';

export class FindIndexesDto {
  @ApiProperty({
    description: 'Date to find indexes',
  })
  date: string;
}
