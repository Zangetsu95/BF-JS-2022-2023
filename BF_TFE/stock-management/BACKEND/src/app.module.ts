import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { StockModule } from './stock/stock.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';
import { StripeModule } from './stripe/stripe.module';
config();

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
    UserModule,
    CategoryModule,
    ProductModule,
    SupplierModule,
    StockModule,
    TransactionModule,
    AuthModule,
    ProductSupplierModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
