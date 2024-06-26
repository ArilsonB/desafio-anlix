import { ApiProperty } from '@nestjs/swagger';
import { TipoIndice } from 'src/modules/indexes/entities/index.entity';

export class PatientIndexQuery {
  @ApiProperty({
    enum: ['cardiaco', 'pulmonar'],
    description: 'Get patient most recent index by index type',
  })
  index_type?: TipoIndice;
}
