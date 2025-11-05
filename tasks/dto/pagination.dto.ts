import { IsOptional, IsNumberString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional({
    example: '1',
    description: 'Número de página (por defecto 1)',
  })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({
    example: '10',
    description: 'Cantidad de registros por página (por defecto 10)',
  })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}
