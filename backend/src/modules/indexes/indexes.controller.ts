import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';
import { IndexesService } from './indexes.service';

@Controller('characteristics')
export class IndexesController {
  constructor(private readonly characteristicsService: IndexesService) {}

  @Post()
  create(@Body() createIndexDto: CreateIndexDto) {
    return this.characteristicsService.create(createIndexDto);
  }

  @Get()
  findAll() {
    return this.characteristicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characteristicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndexDto: UpdateIndexDto) {
    return this.characteristicsService.update(+id, updateIndexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characteristicsService.remove(+id);
  }
}
