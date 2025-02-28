import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { RequestWithUser } from 'src/interface/request.interface';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: RequestWithUser, res: Response, next: NextFunction) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // Simulating a logged-in user (for testing)
    req.user = { roles: ['admin'] }; // Attach an admin user
    next(); // Move to the next middleware/controller
  }
}
