import type { Computation, OperationType } from '../types';

const computeAddition: Computation = (leftOperand, rightOperand) =>
  leftOperand + rightOperand;

const computeSubtraction: Computation = (leftOperand, rightOperand) =>
  leftOperand - rightOperand;

const computeMultiplication: Computation = (leftOperand, rightOperand) =>
  leftOperand * rightOperand;

const computeDivision: Computation = (leftOperand, rightOperand) =>
  leftOperand / rightOperand;

const computations: Record<OperationType, Computation> = {
  addition: computeAddition,
  division: computeDivision,
  multiplication: computeMultiplication,
  subtraction: computeSubtraction,
};

const computeOperation = (
  leftOperand: number,
  rightOperand: number,
  operator: OperationType
): number => computations[operator](leftOperand, rightOperand);

export default computeOperation;
