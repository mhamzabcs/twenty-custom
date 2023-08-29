import { Module } from '@nestjs/common';

import { PlatformKeyController } from './platform-key.controller';
import { PlatformKeyService } from './platform-key.service';

@Module({
  imports: [],
  controllers: [PlatformKeyController],
  providers: [PlatformKeyService],
})
export class platformKeyModule {}
