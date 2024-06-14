import { ApiProperty } from '@nestjs/swagger';

export class ExportCsvDto {
  @ApiProperty({
    description: 'List of cpf patients to export data',
  })
  patients: string[];
}
