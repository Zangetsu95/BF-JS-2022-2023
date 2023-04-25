import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import Stripe from 'stripe';
import * as nodemailer from 'nodemailer';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    config();
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2b3917b6426c6f',
        pass: '75f4e7bca1d130',
      },
    });

    const mailOptions = {
      from: 'adminSPRL@example.com',
      to,
      subject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px;">
          <h1 style="color: #333333;">Nouvelle transaction</h1>
          <p>Merci pour votre achat !</p>
          <h2>Un pdf est disponible :) !</h2>
          <p>Il vous suffit d'aller sur votre profil et de le télécharger</p>
        </div>
      `,
    };

    try {
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async processPayment(paymentMethodId: string, amount: number) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        payment_method: paymentMethodId,
        amount: amount,
        currency: 'eur',
        confirmation_method: 'manual',
        confirm: true,
      });

      if (paymentIntent.status === 'succeeded') {
        await this.sendMail(
          'customer@example.com',
          'Nouvelle transaction',
          'Merci pour votre achat !',
        );

        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.log(error);
      return { success: false, error: error.message };
    }
  }
}
