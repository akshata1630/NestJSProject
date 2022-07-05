import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ROLE_MODEL } from 'src/models/model.constants';
import { RoleSchema } from 'src/models/role.model';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
    imports:[
        // RoleModule
        MongooseModule.forFeature([
            { name: ROLE_MODEL, schema: RoleSchema },
        ]),
    ],
    providers:[RoleService],
    controllers:[RoleController]
})
export class RoleModule {}
