import { Controller } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  // 在构造函数中注入CatsService
  constructor(private readonly cats: CatsService) {}
}
