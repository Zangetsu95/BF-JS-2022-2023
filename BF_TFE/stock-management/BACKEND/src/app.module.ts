import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: 1433,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
      //logging : "all"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
