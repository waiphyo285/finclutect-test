import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  @MinLength(1)
  @ApiProperty()
  application_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  sales_agent_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  account_type: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  application_status: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  @ApiProperty()
  business_category: string;
}
