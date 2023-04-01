import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationEntity } from 'src/entities/donation.entity';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';

@Module({
  imports: [TypeOrmModule.forFeature([DonationEntity])],
  controllers: [DonationController],
  providers: [DonationService],
})
export class DonationModule {}
