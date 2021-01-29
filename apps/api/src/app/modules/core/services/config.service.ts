import { Injectable } from '@nestjs/common';
import { get } from 'env-var';

import type { Environment } from '../environment.type';

@Injectable()
export class ConfigService {
  public get port(): number {
    return get('PORT').required().asPortNumber();
  }

  public get environment(): Environment {
    return get('ENVIRONMENT').required().asEnum(['DEVELOPMENT', 'PRODUCTION']);
  }
}
