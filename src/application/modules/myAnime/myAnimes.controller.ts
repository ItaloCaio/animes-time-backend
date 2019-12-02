import { MyAnimesService } from './myAnimes.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MyAnimes } from './interface/MyAnimes';
import { MyAnimesDto } from './dto/myAnime.dto';

@Controller(':user_id/my-animes')
export class MyAnimesController {

    constructor(private readonly myAnimesService: MyAnimesService){}

    @Post()
    async saveMyAnime(@Body() myAnimesDto: MyAnimesDto, @Param('user_id') userId): Promise<MyAnimes> {
        console.log(myAnimesDto);
        const myAnimes: MyAnimes = myAnimesDto;
        myAnimes.userId = await userId;
        return this.myAnimesService.add(myAnimes);
    }

    @Get()
    async getAllMyAnimesFromAnimeId(@Param('user_id') userId): Promise<MyAnimes[]> {
        return this.myAnimesService.getAllFromUserId(userId);
    }

    @Get(':id')
    async getMyAnimesFromId(@Param('id') id): Promise<MyAnimes> {
        return this.myAnimesService.getById(id);
    }

    @Put(':id')
    async updateMyAnimeById(@Param('id') id, @Body() myAnimes: MyAnimes): Promise<MyAnimes> {
        return this.myAnimesService.update(id, myAnimes);
    }

    @Delete(':id')
    async deleteMyAnimesById(@Param('id') id): Promise<boolean> {
        return this.myAnimesService.remove(id);
    }

}