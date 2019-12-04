import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comments } from './interface/comments.interface';
import { CommentsDto } from './dto/comments.dto';

@Controller(':episode_id/comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService) {
    }

    @Get()
    async getAllCommentsFromEpisode(@Param('episode_id') episodeId): Promise<Comments[]> {
        return this.commentsService.getAllFromEpisodeId(episodeId);
    }

    @Post()
    async addCommentsFromEpisode(@Body() comment: CommentsDto): Promise<Comments> {
        return this.commentsService.add(comment);
    }
}