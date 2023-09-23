import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    description: 'Nombre de la producto',
    default: 'producto x',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Descripcion de la producto',
    default: 'descripcion...',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
