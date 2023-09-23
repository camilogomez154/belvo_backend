import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Nombre del usuario en concreto.',
    default: 'Juan Jose',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Apellido del usuario en concreto.',
    default: 'PerezRodriguez',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    description: 'Correo electronico del usuario.',
    default: 'juan.jose@corre.email',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña para acceso a la aplicacion.',
    default: 'xxxxxx.1111',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
