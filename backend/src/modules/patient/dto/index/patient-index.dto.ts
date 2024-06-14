import { ApiProperty } from '@nestjs/swagger';
import { TipoIndice } from 'src/modules/indexes/entities/index.entity';

export class PatientIndexQuery {
  @ApiProperty()
  index_type: TipoIndice;
}
