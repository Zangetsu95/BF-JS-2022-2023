import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/shared/entities/transaction/transaction.entity';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { UserService } from 'src/user/user.service';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TransactionEntity,
      UserEntity,
      ProductEntity,
      StockEntity,
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, UserService, AuthGuard, StripeService],
})
export class TransactionModule {}
