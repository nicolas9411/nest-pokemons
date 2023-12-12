import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Min(1)
  limit?: number;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  offset?: number;
}
