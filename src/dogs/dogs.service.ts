// dogs/dogs.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  log() {
    return 'DogService log';
  }
}
