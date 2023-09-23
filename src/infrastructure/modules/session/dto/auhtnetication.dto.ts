import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthenticationDto {
  @ApiProperty({
    description: 'This is email to authenticate one user.',
    default: 'juan.jose@corre.email',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'This is password to authenticate one user.',
    default: 'xxxxxx.1111',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
