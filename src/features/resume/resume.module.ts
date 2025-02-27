import { Module } from '@nestjs/common';
import { ResumeService } from './resume/resume.service';
import { ResumeController } from './resume/resume.controller';

@Module({
  providers: [ResumeService],
  controllers: [ResumeController],
})
export class ResumeModule {}
