import { ApiProperty } from '@nestjs/swagger';

// test/dto/test-info.dto.ts
export class TestInfoDto {
  @ApiProperty({ description: '用户名', example: 'user1' })
  username: string;
  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
