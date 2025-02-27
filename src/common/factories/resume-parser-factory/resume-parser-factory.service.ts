import { Injectable } from '@nestjs/common';

interface ResumeParser {
  parse(file: any): string;
}

// Move classes outside the factory class
export class PdfResumeParser implements ResumeParser {
  parse(file: any): string {
    return `Parsed PDF: ${file}`;
  }
}

export class DocxResumeParser implements ResumeParser {
  parse(file: any): string {
    return `Parsed DOCX: ${file}`;
  }
}

@Injectable()
export class ResumeParserFactory {
  getParser(fileType: string): ResumeParser {
    if (fileType === 'pdf') {
      return new PdfResumeParser();
    } else if (fileType === 'docx') {
      return new DocxResumeParser();
    }
    throw new Error('Unknown file type');
  }
}
