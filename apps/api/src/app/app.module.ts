import { Module } from '@nestjs/common';

import { CalculusModule } from './modules/calculus/calculus.module';
import { CoreModule } from './modules/core/core.module';

@Module({ imports: [CoreModule, CalculusModule] })
export class AppModule {}
