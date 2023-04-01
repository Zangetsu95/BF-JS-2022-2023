import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DonationEntity } from '../../entities/donation.entity';
import { DonationService } from './donation.service';

@Controller('api/donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  async findAll(): Promise<DonationEntity[]> {
    return this.donationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DonationEntity> {
    return this.donationService.findOne(+id);
  }

  @Post()
  async create(@Body() donation: DonationEntity): Promise<DonationEntity> {
    return this.donationService.create(donation);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() donation: DonationEntity,
  ): Promise<DonationEntity> {
    return this.donationService.update(+id, donation);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.donationService.remove(+id);
  }
}
