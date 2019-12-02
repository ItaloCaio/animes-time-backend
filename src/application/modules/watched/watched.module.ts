import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchedSchema } from './shema/watched.schema';
import { WatchedController } from './watched.controller';
import { WatchedService } from './watched.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Watched', schema: WatchedSchema }])],
    controllers: [WatchedController],
    providers: [WatchedService],
})
export class WatchedsModule {}