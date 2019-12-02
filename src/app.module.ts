import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './application/modules/user/user.module';
import { AnimeModule } from './application/modules/anime/anime.module';
import { EpisodeModule } from './application/modules/episode/episode.module';
import { CommentsModule } from './application/modules/comments/comments.module';
import { MyAnimesModule } from './application/myAnime/myAnimes.module';

@Module({
  imports: [UserModule, AnimeModule, EpisodeModule, CommentsModule, MyAnimesModule, MongooseModule.forRoot('mongodb://localhost:27017/ihc')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
