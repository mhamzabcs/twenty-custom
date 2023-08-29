mport { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { PlatformKeyService } from './platform-key.service';
import { CreateKey } from './dto/CreateKey.dto';

@Controller('platform-key')
export class PlatformKeyController {
  constructor(private readonly platformKeyService: PlatformKeyService) {}

  @Post()
  check(@Body() body: CreateKey) {
    return this.platformKeyService.create(body);
  }

  @Get()
  list() {
    return this.platformKeyService.findMany();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: CreateKey) {
    return this.platformKeyService.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }
}