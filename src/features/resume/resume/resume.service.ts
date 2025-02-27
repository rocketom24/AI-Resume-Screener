import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class ResumeService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    console.log('ResumeService has been initialized');
  }
  onModuleDestroy() {
    console.log('ResumeService has been destroyed');
  }
  processResume(file: any) {
    console.log('Processing resume:', file);
  }
}
