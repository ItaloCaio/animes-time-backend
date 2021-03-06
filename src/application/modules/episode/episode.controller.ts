import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { EpisodeDto } from './dto/episode.dto';
import { Episode } from './interface/episode';
import { EpisodeService } from './episode.service';

@Controller('episode')
export class EpisodeController {

    constructor(private readonly episodeService: EpisodeService) { }

    @Post()
    async saveEpisode(@Body() episodeDto: EpisodeDto): Promise<Episode> {

        return this.episodeService.add(episodeDto);
    }

    @Get()
    async getAllEpisodes(): Promise<Episode[]> {
        return this.episodeService.getAll();
    }

    @Get(':id')
    async getEpisodeById(@Param('id') id): Promise<Episode> {
        return this.episodeService.getById(id);
    }

    @Put(':id')
    async updateEpisodeById(@Param('id') id, @Body() episode: Episode): Promise<Episode> {
        return this.episodeService.update(id, episode);
    }

    @Delete(':id')
    async deleteEpisodeById(@Param('id') id): Promise<boolean> {
        return this.episodeService.remove(id);
    }
}