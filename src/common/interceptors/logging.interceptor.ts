import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request>(); // Add Type for Request
    const method = request.method;
    const url = request.url;
    const now = Date.now();

    console.log(`📩 Incoming Request: ${method} ${url}`);

    return next.handle().pipe(
      tap((data) => {
        const duration = Date.now() - now;
        console.log(`✅ Response Sent: ${method} ${url} - ${duration}ms`);
        console.log(`📦 Response Data:`, data);
      }),
    );
  }
}
