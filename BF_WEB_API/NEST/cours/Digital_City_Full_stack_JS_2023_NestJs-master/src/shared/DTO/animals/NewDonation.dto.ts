import { OmitType } from '@nestjs/mapped-types';
import { DonationDTO } from './Donation.dto';

export class NewDonationDTO extends OmitType(DonationDTO, ['id']) {}
