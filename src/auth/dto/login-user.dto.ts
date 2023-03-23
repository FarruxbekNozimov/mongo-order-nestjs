import { IsString, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'ganibek' })
  @IsEmail()
  readonly username: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  @IsString()
  readonly password: string;
}
