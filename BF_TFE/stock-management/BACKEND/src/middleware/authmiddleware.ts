import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

interface UserPayload {
  email: string;
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
      isAdmin?: boolean;
    }
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Unauthorized');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      req.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
      };

      next();
    } catch (error) {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
