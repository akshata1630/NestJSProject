import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ROLE_MODEL } from 'src/models/model.constants';
import { CreateOrEditOrDeleteRoleResponse, CreateRoleDto, getRoleDto } from './dto/role.dto';
import { IRole } from './interfaces/role.interface';

@Injectable()
export class RoleService {

    constructor(
        @InjectModel(ROLE_MODEL) private readonly rolesModel: Model<IRole>
    ) { }

    async getRole() {
        try {
            const roleList = await this.rolesModel.find();

            const response: getRoleDto = {
                message: 'Record List',
                data: roleList
            }

            return response;

        } catch {
            console.log('Data not found');

        }
    }

    async createRole(createRoleDto: CreateRoleDto) {
        const { name, mobile } = createRoleDto;
        const newRole = new this.rolesModel({ name: name, mobile: mobile });
        try {
            await newRole.save();

            const response: CreateOrEditOrDeleteRoleResponse = { message: 'Role created successfully' };
            return response;
        } catch (err) {
            if (err.code == 11000)
                console.log('bad request');

            else
                console.log('error occured');

        }
    }
}
