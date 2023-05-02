// dogs/dogs.module.ts
import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  exports: [DogsService],
  providers: [DogsService],
})
export class DogsModule {}
