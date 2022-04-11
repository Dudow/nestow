import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfessionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
