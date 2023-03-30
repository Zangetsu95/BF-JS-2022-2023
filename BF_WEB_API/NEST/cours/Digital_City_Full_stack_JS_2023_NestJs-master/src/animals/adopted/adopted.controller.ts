import { Controller, Get, Param, Query } from '@nestjs/common';
import { AdoptedDTO } from 'src/shared/DTO/adopted/adopted.dto';
import { AdoptedService } from './adopted.service';

@Controller('/api/adopted')
export class AdoptedController {
  constructor(private readonly adoptedServe: AdoptedService) {}

  @Get()
  async getAll(@Query('family') familyFilter: boolean): Promise<AdoptedDTO[]> {
    return await this.adoptedServe.getAll();
  }

  @Get(':adoptedId')
  getOne(@Param('adoptedId') adoptedId: number) {
    console.log(adoptedId);
  }
}
