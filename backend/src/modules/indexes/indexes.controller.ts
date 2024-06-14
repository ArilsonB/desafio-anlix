import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ExportCsvDto } from './dto/export-csv.dto';
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

  @Post('export-csv')
  downloadCSV(@Body() { patients }: ExportCsvDto, @Res() res: Response) {
    const csvData = this.indexesService.exportCSVFile(patients);

    // Set headers to prompt download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="data.csv"');

    // Send the CSV data
    res.send(csvData);
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
