import { Controller, Post, Body } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post('process')
  processResume(@Body() file: any) {
    return this.resumeService.processResume(file);
  }
}
