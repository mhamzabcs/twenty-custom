import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKey {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  platformKey: string;

  @IsNotEmpty()
  @IsString()
  workspaceName: string;
}
