import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { RoleModule } from './role/role.module';

const config = new ConfigService(`.env.${process.env.NODE_ENV}`);
const { databaseType, databaseHost, databaseName } = config;
const databaseURL = `${databaseType}://${databaseHost}/${databaseName}`;

@Module({
  imports: [
    MongooseModule.forRoot(databaseURL),
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
