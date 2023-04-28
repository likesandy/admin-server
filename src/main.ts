// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 生成Swagger文档
  generateDocument(app);

  await app.listen(3000);
}
bootstrap();
