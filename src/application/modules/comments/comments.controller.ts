import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comments } from './interface/comments.interface';
import { CommentsDto } from './dto/comments.dto';

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService) {
    }

    @Get()
    async getAllCommentsFromEpisode(): Promise<Comments[]> {
        return this.commentsService.getAll();
    }

    @Post()
    async addCommentsFromEpisode(@Body() comment: CommentsDto): Promise<Comments> {
        return this.commentsService.add(comment);
    }
}