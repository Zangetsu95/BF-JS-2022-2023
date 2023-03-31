import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DonationEntity } from '../../entities/donation.entity';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(DonationEntity)
    private readonly donationRepository: Repository<DonationEntity>,
  ) {}

  async findAll(): Promise<DonationEntity[]> {
    return this.donationRepository.find();
  }

  async findOne(id: number): Promise<DonationEntity> {
    return this.donationRepository.findOne({ where: { id } });
  }

  async create(donation: DonationEntity): Promise<DonationEntity> {
    return this.donationRepository.save(donation);
  }

  async update(id: number, donation: DonationEntity): Promise<DonationEntity> {
    await this.donationRepository.update(id, donation);
    return this.donationRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.donationRepository.delete(id);
  }
}
