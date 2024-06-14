import { ApiProperty } from '@nestjs/swagger';
import { TipoIndice } from 'src/modules/indexes/entities/index.entity';

export class PatientIndexesQuery {
  @ApiProperty({
    description: 'Get patient all indexes by index type',
  })
  index_type?: TipoIndice;

  @ApiProperty({
    description: 'Get patient indexes by date range',
  })
  startDate?: string;

  @ApiProperty({
    description: 'Get patients indexes by date range',
  })
  endDate?: string;
}
