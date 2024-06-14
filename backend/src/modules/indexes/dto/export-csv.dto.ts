import { ApiProperty } from '@nestjs/swagger';

export class ExportCsvDto {
  @ApiProperty()
  patients: number[];
}
