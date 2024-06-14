import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { TipoIndice } from '../indexes/entities/index.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}
  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new patient';
  }

  findLatestIndex(cpf: string, type: TipoIndice) {
    const queryBuilder = this.patientRepository.createQueryBuilder('patient');

    queryBuilder
      .innerJoinAndSelect('indice', 'indice.cpf = patient.cpf')
      .select(['indice'])
      .where('patient.cpf = :cpf', { cpf })
      .andWhere('indice.tipo_indice = :type', { type })
      .orderBy('indice.data', 'DESC');

    const data = queryBuilder.getOne();

    return data;
  }

  async findAll() {
    return await this.patientRepository.find();
  }

  async findOne(cpf: string) {
    return await this.patientRepository.findOne({
      where: {
        cpf,
      },
    });
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
