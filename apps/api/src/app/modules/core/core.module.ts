import { Module } from '@nestjs/common';

import { ConfigService } from './services/config.service';

@Module({
  exports: [ConfigService],
  providers: [ConfigService],
})
export class CoreModule {}
