import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FindIndexesDto } from './dto/find-indexes.dto';
import { IndexesService } from './indexes.service';

@Controller('index')
export class IndexesController {
  constructor(private readonly indexesService: IndexesService) {}

  @Post()
  create() {
    return this.indexesService.create();
  }

  @Get()
  findAll(@Query() { date }: FindIndexesDto) {
    return this.indexesService.findAll(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indexesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.indexesService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indexesService.remove(+id);
  }
}
