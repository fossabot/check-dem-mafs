import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';

import { CalculusService } from './calculus.service';
import { ResultDto } from './dtos/result.dto';

@Controller('calculus')
export class CalculusController {
  public constructor(private readonly calculusService: CalculusService) {}

  @Post('add')
  public addition(
    @Body('left', ParseIntPipe) left: number,
    @Body('right', ParseIntPipe) right: number
  ): ResultDto {
    return this.calculusService.compute(left, right, 'addition');
  }

  @Post('sub')
  public subtraction(
    @Body('left', ParseIntPipe) left: number,
    @Body('right', ParseIntPipe) right: number
  ): ResultDto {
    return this.calculusService.compute(left, right, 'subtraction');
  }

  @Post('mul')
  public multiplication(
    @Body('left', ParseIntPipe) left: number,
    @Body('right', ParseIntPipe) right: number
  ): ResultDto {
    return this.calculusService.compute(left, right, 'multiplication');
  }

  @Post('div')
  public division(
    @Body('left', ParseIntPipe) left: number,
    @Body('right', ParseIntPipe) right: number
  ): ResultDto {
    return this.calculusService.compute(left, right, 'division');
  }
}
