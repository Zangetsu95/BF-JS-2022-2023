import * as crypto from 'crypto';

// Generate a secure, random key using the crypto module
const secret = crypto.randomBytes(32).toString('hex');

export const jwtConstants = {
  secret: secret,
};
