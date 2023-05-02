// test/test.controller.ts
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestInfoDto } from './dto/test-info.dto';

@Controller('test')
@ApiTags('测试')
export class TestController {
  // GET /test
  @Get()
  index() {
    return 'hello world';
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED, // 201
    type: TestInfoDto,
  })
  getRes(@Body() testInfoDto: TestInfoDto) {
    return testInfoDto;
  }
}
