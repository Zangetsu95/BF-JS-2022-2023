import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    config();
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    });
  }

  async processPayment(paymentMethodId: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        payment_method: paymentMethodId,
        amount: 1000,
        currency: 'eur',
        confirmation_method: 'manual',
        confirm: true,
      });

      if (paymentIntent.status === 'succeeded') {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
