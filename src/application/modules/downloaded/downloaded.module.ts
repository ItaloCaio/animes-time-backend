import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DownloadedSchema } from './shema/downloaded.schema';
import { DownloadedController } from './downloaded.controller';
import { DownloadedService } from './downloaded.service';



@Module({
    imports: [MongooseModule.forFeature([{ name: 'Downloaded', schema: DownloadedSchema }])],
    controllers: [DownloadedController],
    providers: [DownloadedService],
})
export class DownloadedModule {}