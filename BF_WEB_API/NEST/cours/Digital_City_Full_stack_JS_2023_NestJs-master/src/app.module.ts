import { Module } from '@nestjs/common';
import { AdoptedModule } from './animals/adopted/adopted.module';
import { IncomingModule } from './animals/incoming/incoming.module';

@Module({
  imports: [IncomingModule, AdoptedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
