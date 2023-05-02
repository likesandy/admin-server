// cats/cats.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  // 在当前模块中导入 CatsService，然后将其提供给 CatsController。
  providers: [CatsService],
})
export class CatsModule {}
