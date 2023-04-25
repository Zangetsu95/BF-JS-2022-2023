import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('api/stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  async processPayment(
    @Body('paymentMethodId') paymentMethodId: string,
    @Body('amount') amount: number,
  ) {
    return await this.stripeService.processPayment(paymentMethodId, amount);
  }
}
