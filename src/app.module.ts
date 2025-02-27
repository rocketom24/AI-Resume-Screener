import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ResumeService } from './features/resume/resume/resume.service';
import { ResumeController } from './features/resume/resume/resume.controller';
import { ResumeModule } from './features/resume/resume.module';

@Module({
  imports: [CommonModule, ResumeModule],
  controllers: [AppController, ResumeController],
  providers: [AppService, ResumeService],
})
export class AppModule {}
