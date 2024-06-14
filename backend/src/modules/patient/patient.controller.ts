import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PatientIndexQuery } from './dto/index/patient-index.dto';
import { PatientIndexesQuery } from './dto/index/patient-indexes.dto';
import { PatientService } from './patient.service';
import { FindPatientsDto } from './dto/find-patients.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create() {
    return this.patientService.create();
  }

  @Get()
  findAll(@Query() { search }: FindPatientsDto) {
    return this.patientService.findAll(search);
  }

  @Get(':cpf/index')
  findPatientIndex(
    @Param('cpf') cpf: string,
    @Query() { index_type }: PatientIndexQuery,
  ) {
    return this.patientService.findLatestIndex(cpf, index_type);
  }

  @Get(':cpf/indexes')
  findPatientIndexes(
    @Param('cpf') cpf: string,
    @Query() indexesQuery: PatientIndexesQuery,
  ) {
    return this.patientService.findIndexes(cpf, indexesQuery);
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.patientService.findOne(cpf);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.patientService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}
