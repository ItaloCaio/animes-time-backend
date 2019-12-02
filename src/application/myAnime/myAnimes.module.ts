import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyAnimesService } from './myAnimes.service';
import { MyAnimesController } from './myAnimes.controller';
import { MyAnimeSchema } from './schema/myAnime.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'MyAnimes', schema: MyAnimeSchema }])],
    controllers: [MyAnimesController],
    providers: [MyAnimesService],
})
export class MyAnimesModule {}