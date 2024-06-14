import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse } from 'date-fns';
import { In, Repository } from 'typeorm';
import { utils } from 'xlsx';
import { Index, TipoIndice } from './entities/index.entity';

@Injectable()
export class IndexesService {
  constructor(
    @InjectRepository(Index)
    private readonly indexRepository: Repository<Index>,
  ) {}

  create() {
    return 'This action adds a new characteristic';
  }

  async findAll(date?: string) {
    return await this.indexRepository.find({
      where: {
        data: date ? parse(date, 'yyyy-MM-dd', new Date()) : undefined,
      },
    });
  }

  async findOne(id: number) {
    return await this.indexRepository.findOne({
      where: {
        id,
      },
      relations: ['indices'],
    });
  }

  async findRecentIndexeByPatient(patientCPF: string) {
    const cardiaco = await this.indexRepository.findOne({
      where: {
        cpf: patientCPF,
        tipo_indice: TipoIndice.CARDIACO,
      },
      order: {
        data: 'desc',
      },
    });

    const pulmonar = await this.indexRepository.findOne({
      where: {
        cpf: patientCPF,
        tipo_indice: TipoIndice.PULMONAR,
      },
      order: {
        data: 'desc',
      },
    });

    return [cardiaco, pulmonar];
  }

  async findBy({
    cpf,
    startDate,
    endDate,
  }: {
    cpf?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const queryBuilder = this.indexRepository.createQueryBuilder('index');

    if (cpf) {
      queryBuilder.andWhere('index.cpf = :cpf', { cpf });
    }

    if (startDate) {
      queryBuilder.andWhere('index.data >= :startDate', {
        startDate: parse(startDate, 'yyyy-MM-dd', new Date()),
      });

      if (endDate) {
        queryBuilder.andWhere('index.data <= :endDate', {
          endDate: parse(endDate, 'yyyy-MM-dd', new Date()),
        });
      }
    }

    return await queryBuilder.getMany();
  }

  async findRecentIndexByPatientAndType(
    patientCPF: string,
    indexType: TipoIndice,
  ) {
    return await this.indexRepository.findOne({
      where: {
        cpf: patientCPF,
        tipo_indice: indexType,
      },
      order: {
        data: 'desc',
      },
    });
  }

  async findAllIndexesByPatientAndType(
    patientCPF: string,
    indexType: TipoIndice,
  ) {
    return await this.indexRepository.find({
      where: {
        cpf: patientCPF,
        tipo_indice: indexType,
      },
      order: {
        data: 'desc',
      },
    });
  }

  async exportCSVFile(patients: string[]) {
    const data = await this.indexRepository.find({
      where: {
        cpf: In(patients),
      },
    });

    const worksheet = utils.json_to_sheet(data);

    const csvData = utils.sheet_to_csv(worksheet);

    return csvData;
  }

  update(id: number) {
    return `This action updates a #${id} characteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characteristic`;
  }
}
