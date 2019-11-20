import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsSchema } from './schema/comments.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Comments', schema: CommentsSchema }])],
    controllers: [CommentsController],
    providers: [CommentsService],
  })
  export class CommentsModule {}
