
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WatchedService } from './watched.service';
import { Watched } from './interface/watched';
import { WatchedDto } from './dto/watched.dto';

@Controller(':user_id/watched')
export class WatchedController {

    constructor(private readonly watchedService: WatchedService){}

    @Post()
    async saveWatched(@Body() watchedDto: WatchedDto, @Param('user_id') userId): Promise<Watched> {
        const watched: Watched = watchedDto;
        watched.userId = await userId;
        return this.watchedService.add(watched);
    }

    @Get()
    async getAllWatchedsFromAnimeId(@Param('user_id') userId): Promise<Watched[]> {
        return this.watchedService.getAllFromUserId(userId);
    }

    @Get(':id')
    async getWatchedFromId(@Param('id') id): Promise<Watched> {
        return this.watchedService.getById(id);
    }

    @Put(':id')
    async updateWatchedById(@Param('id') id, @Body() myAnimes: Watched): Promise<Watched> {
        return this.watchedService.update(id, myAnimes);
    }

    @Delete(':id')
    async deleteWatchedById(@Param('id') id): Promise<boolean> {
        return this.watchedService.remove(id);
    }

}