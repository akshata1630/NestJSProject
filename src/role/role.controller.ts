import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/role.dto';
import { RoleService } from './role.service';

@ApiTags('Role management')
@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) { }

    @Get()
    @ApiResponse({ status: 201, description: 'The record List.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getRole() {
        return this.roleService.getRole();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.createRole(createRoleDto);
    }
}
