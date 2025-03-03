import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Express } from 'express'; // Import Express types

@Injectable()
export class ResumeValidationPipe implements PipeTransform {
  transform(file: unknown): Express.Multer.File {
    if (!file || typeof file !== 'object' || !('mimetype' in file)) {
      throw new BadRequestException('Invalid file format');
    }

    const multerFile = file as Express.Multer.File; // Type assertion

    const allowedMimeTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedMimeTypes.includes(multerFile.mimetype)) {
      throw new BadRequestException('Only PDF and DOCX files are allowed');
    }

    return multerFile; // Ensure it's correctly typed
  }
}
