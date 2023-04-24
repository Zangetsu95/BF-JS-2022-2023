import * as crypto from 'crypto';

// Generate a secure, random key using the crypto module
const secret = crypto.randomBytes(32).toString('hex');

import { config } from 'dotenv';
config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};
