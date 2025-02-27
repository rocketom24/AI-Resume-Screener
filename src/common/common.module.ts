import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ResumeParserFactory } from './factories/resume-parser-factory/resume-parser-factory.service';

@Module({
  providers: [LoggerService, ResumeParserFactory],
  exports: [LoggerService],
})
export class CommonModule {}
