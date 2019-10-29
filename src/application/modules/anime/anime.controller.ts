import { AnimeService } from './anime.service';
import { Post, Controller, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AnimeDto } from './dto/anime.dto';
import { Anime } from './interface/anime';

@Controller('anime')
export class AnimeController {
    constructor(private readonly animeService: AnimeService) {

    }
    @Post()
    async createAnime(@Body() anime: AnimeDto): Promise<Anime> {
        return this.animeService.add(anime);
    }

    @Get()
    async getAllAnimes(): Promise<Anime[]> {
        return this.animeService.getAll();
    }

    @Get(':id')
    async getAnimeById(@Param('id') id): Promise<Anime> {
        return this.animeService.getById(id);
    }

    @Put(':id')
    async updateAnimeById(@Param('id') id, @Body() anime: Anime): Promise<Anime> {
        return this.animeService.update(id, anime);
    }

    @Delete(':id')
    async deleteAnimeById(@Param('id') id): Promise<boolean> {
        return this.animeService.remove(id);
    }
}