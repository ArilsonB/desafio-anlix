import { ApiProperty } from '@nestjs/swagger';

export class PatientIndexesQuery {
  @ApiProperty()
  startDate?: string;

  @ApiProperty()
  endDate?: string;
}
