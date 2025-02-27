import { Test, TestingModule } from '@nestjs/testing';
import { ResumeParserFactory } from './resume-parser-factory.service';

describe('ResumeParserFactory', () => {
  let service: ResumeParserFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResumeParserFactory],
    }).compile();

    service = module.get<ResumeParserFactory>(ResumeParserFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
