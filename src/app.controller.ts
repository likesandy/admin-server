// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs/dogs.service';

@Controller()
export class AppController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getName() {
    return this.dogsService.log();
  }
}
