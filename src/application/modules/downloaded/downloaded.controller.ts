
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DownloadedService } from './downloaded.service';
import { DownloadedDto } from './dto/downloaded.dto';
import { Downloaded } from './interface/downloaded';

@Controller(':user_id/downloaded')
export class DownloadedController {

    constructor(private readonly downloadedService: DownloadedService){}

    @Post()
    async saveWatched(@Body() downloadedDto: DownloadedDto, @Param('user_id') userId): Promise<Downloaded> {
        const downloaded: Downloaded = downloadedDto;
        downloaded.userId = await userId;
        return this.downloadedService.add(downloaded);
    }

    @Get()
    async getAllWatchedsFromAnimeId(@Param('user_id') userId): Promise<Downloaded[]> {
        return this.downloadedService.getAllFromUserId(userId);
    }

    @Get(':id')
    async getWatchedFromId(@Param('id') id): Promise<Downloaded> {
        return this.downloadedService.getById(id);
    }

    @Put(':id')
    async updateWatchedById(@Param('id') id, @Body() myAnimes: Downloaded): Promise<Downloaded> {
        return this.downloadedService.update(id, myAnimes);
    }

    @Delete(':id')
    async deleteWatchedById(@Param('id') id): Promise<boolean> {
        return this.downloadedService.remove(id);
    }

}