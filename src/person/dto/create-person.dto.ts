import { IsNotEmpty, IsEmail, IsString, IsPhoneNumber } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  profession_id: string;
}
