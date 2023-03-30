import { Module } from '@nestjs/common';
import { IncomingService } from '../incoming/incoming.service';
import { AdoptedController } from './adopted.controller';
import { AdoptedService } from './adopted.service';

@Module({
  imports: [],
  controllers: [AdoptedController],
  providers: [AdoptedService],
})
export class AdoptedModule {}
