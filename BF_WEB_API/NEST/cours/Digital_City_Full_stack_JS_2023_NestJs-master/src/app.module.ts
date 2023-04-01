import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomingModule } from './animals/incoming/incoming.module';
import { DonationModule } from './animals/donation/donation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'amine',
      password: 'root',
      database: 'SPA',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
      //logging : "all"
    }),
    IncomingModule,
    DonationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}