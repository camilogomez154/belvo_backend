import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty({
    description: 'Nombre de la categoria',
    default: 'categoria x',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Descripcion de la categoria',
    default: 'descripcion...',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
