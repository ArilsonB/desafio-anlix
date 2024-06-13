import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';
import { Index } from './entities/index.entity';

@Injectable()
export class IndexesService {
  constructor(
    @InjectRepository(Index)
    private readonly indexRepository: Repository<Index>,
  ) {}

  create(createIndexDto: CreateIndexDto) {
    return 'This action adds a new characteristic';
  }

  async findAll() {
    return await this.indexRepository.find();
  }

  async findOne(id: number) {
    return await this.indexRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateIndexDto: UpdateIndexDto) {
    return `This action updates a #${id} characteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characteristic`;
  }
}
