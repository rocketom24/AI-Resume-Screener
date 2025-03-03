import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResumeValidationPipe } from 'src/common/pipes/resume-validation.pipe'; // Import ResumeValidationPipe
import { TransformFileNamePipe } from 'src/common/pipes/transform-file-name';
@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post('process')
  processResume(@Body() file: any) {
    return this.resumeService.processResume(file);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new ResumeValidationPipe(), new TransformFileNamePipe()) // Correct pipe usage
  uploadResume(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    return {
      message: 'Resume uploaded successfully',
      fileName: file.originalname,
    };
  }
}
