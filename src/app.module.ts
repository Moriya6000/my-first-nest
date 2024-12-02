import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './class/class.module';
import { ChapterModule } from './chapter/chapter.module';
import { MentorModule } from './mentor/mentor.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ClassModule, ChapterModule, MentorModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
