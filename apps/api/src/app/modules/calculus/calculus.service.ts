import type { OperationType } from '@cdm/calculus';
import { Operation } from '@cdm/calculus';
import { Injectable } from '@nestjs/common';

import type { ResultDto } from './dtos/result.dto';

@Injectable()
export class CalculusService {
  public compute(
    leftOperand: number,
    rightOperand: number,
    operationType: OperationType
  ): ResultDto {
    const operation = new Operation(leftOperand, rightOperand, operationType);
    const result = { value: operation.compute() };

    return result;
  }
}
