import { ApiProperty } from '@nestjs/swagger';
import { TipoIndice } from 'src/modules/indexes/entities/index.entity';

export class PatientIndexesQuery {
  @ApiProperty()
  index_type?: TipoIndice;

  @ApiProperty()
  startDate?: string;

  @ApiProperty()
  endDate?: string;
}
