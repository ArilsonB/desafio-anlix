import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Index } from './entities/index.entity';
import { IndexesController } from './indexes.controller';
import { IndexesService } from './indexes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Index])],
  controllers: [IndexesController],
  providers: [IndexesService],
  exports: [IndexesService],
})
export class IndexesModule {}
