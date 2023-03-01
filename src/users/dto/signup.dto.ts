import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: String;

  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: String;
}