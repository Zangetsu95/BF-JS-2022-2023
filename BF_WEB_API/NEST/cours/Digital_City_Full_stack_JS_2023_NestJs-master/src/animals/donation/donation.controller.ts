import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DonationEntity } from '../../entities/donation.entity';
import { DonationService } from './donation.service';
import { DonationDTO } from 'src/shared/DTO/animals/Donation.dto';
import { NewDonationDTO } from 'src/shared/DTO/animals/NewDonation.dto';

@Controller('api/donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  async findAll(): Promise<DonationEntity[]> {
    const donations = await this.donationService.findAll();
    if (donations.length === 0) {
      throw new HttpException('No donations found', HttpStatus.NOT_FOUND);
    }
    return donations;
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DonationEntity> {
    const donation = await this.donationService.findOne(+id);
    if (!donation) {
      throw new HttpException('Donation not found', HttpStatus.NOT_FOUND);
    }
    return donation;
  }

  @Post()
  async create(
    @Body(ValidationPipe) donation: NewDonationDTO,
  ): Promise<NewDonationDTO> {
    try {
      const createdDonation = await this.donationService.create(donation);
      return {
        ...createdDonation,
      };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() donation: DonationEntity,
  ): Promise<DonationEntity> {
    try {
      const updatedDonation = await this.donationService.update(+id, donation);
      return {
        ...updatedDonation,
      };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.donationService.remove(+id);
  }
}
