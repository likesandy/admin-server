import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
