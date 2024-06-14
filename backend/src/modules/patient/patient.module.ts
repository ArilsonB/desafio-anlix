import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { Patient } from './entities/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexesModule } from '../indexes/indexes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), IndexesModule],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
