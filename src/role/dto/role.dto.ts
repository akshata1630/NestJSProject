import { ApiProperty } from '@nestjs/swagger';

export class getRoleDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  data: any;
}

export class CreateRoleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  mobile: string;

}

export class CreateOrEditOrDeleteRoleResponse {
  @ApiProperty()
  message: string;
}