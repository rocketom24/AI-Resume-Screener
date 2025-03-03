import { PipeTransform, Injectable } from '@nestjs/common';
import { Express } from 'express';
import * as path from 'path';

@Injectable()
export class TransformFileNamePipe implements PipeTransform {
  transform(file: Express.Multer.File): Express.Multer.File {
    if (!file) {
      throw new Error('File is required');
    }

    // Generate a new unique file name
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const newFileName = `${timestamp}-${file.originalname}`;

    // Modify the file object before passing it further
    return {
      ...file,
      originalname: newFileName, // Overwriting the file name
    };
  }
}
