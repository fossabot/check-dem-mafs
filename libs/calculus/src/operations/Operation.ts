import type { OperationType } from '../types';
import computeOperation from './computeOperation';

class Operation {
  protected leftOperand: number;

  protected rightOperand: number;

  protected operation: OperationType;

  public constructor(
    leftOperand: number,
    rightOperand: number,
    operation: OperationType
  ) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.operation = operation;
  }

  public compute(): number {
    return computeOperation(
      this.leftOperand,
      this.rightOperand,
      this.operation
    );
  }
}

export default Operation;
