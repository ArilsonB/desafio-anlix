import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Index } from './entities/indexes.entity';
import { IndexesController } from './indexes.controller';
import { IndexesService } from './indexes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Index])],
  controllers: [IndexesController],
  providers: [IndexesService],
})
export class IndexesModule {}
