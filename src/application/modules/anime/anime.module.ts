import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { AnimeSchema } from './schema/anime.schema';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Anime', schema: AnimeSchema }])],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
