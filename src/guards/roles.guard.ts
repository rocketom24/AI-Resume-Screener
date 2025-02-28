import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RequestWithUser } from 'src/interface/request.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    console.log('🔍 Required Roles:', requiredRoles); // Debugging log
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    console.log('👤 User:', user); // Debugging log

    if (!user) {
      console.log('⛔ No user found in request!');
      return false; // No user means unauthorized
    }

    return requiredRoles.some((role) => user?.roles?.includes(role));
  }
}
