import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { TipoIndice } from '../indexes/entities/index.entity';
import { IndexesService } from '../indexes/indexes.service';
import { PatientIndexesQuery } from './dto/index/patient-indexes.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    private readonly indexesService: IndexesService,
  ) {}
  create() {
    return 'This action adds a new patient';
  }

  async findLatestIndex(cpf: string, type?: TipoIndice) {
    if (type)
      return this.indexesService.findRecentIndexByPatientAndType(cpf, type);

    return this.indexesService.findRecentIndexeByPatient(cpf);
  }

  async findIndexes(cpf: string, { startDate, endDate }: PatientIndexesQuery) {
    return this.indexesService.findBy({ cpf, startDate, endDate });
  }

  async findAll(search?: string) {
    return await this.patientRepository.find({
      where: { nome: search ? Like(`%${search}%`) : undefined },
    });
  }

  async findOne(cpf: string) {
    return await this.patientRepository.findOne({
      where: {
        cpf,
      },
    });
  }

  update(id: number) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
