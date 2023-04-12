import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector, private authGuard: AuthGuard) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    console.log('GUARD');
    if (!(await this.authGuard.canActivate(context))) {
      return false;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(`USER = ${user}`);

    if (!user) return false;

    console.log(user.role);
    return requiredRoles.some((role) => user.role === role);
  }
}
