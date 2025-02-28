import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ResumeService } from './features/resume/resume/resume.service';
import { ResumeController } from './features/resume/resume/resume.controller';
import { ResumeModule } from './features/resume/resume.module';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [CommonModule, ResumeModule],
  controllers: [AppController, ResumeController, AdminController],
  providers: [AppService, ResumeService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
