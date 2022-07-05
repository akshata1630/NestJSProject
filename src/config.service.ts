import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';

export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor(filePath: string) {
        const pathOfFile = join(__dirname, `../src/${filePath}`);

        try {
            this.envConfig = parse(readFileSync(pathOfFile));

        } catch (error) {
            console.log(error, error.stack);
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    public get API_PORT() {
        return this.envConfig.API_PORT;
    }

    public get databaseType() {
        return this.envConfig.DATABASE_TYPE;
    }

    public get databaseHost() {
        return this.envConfig.DATABASE_HOST;
    }

    public get databasePort() {
        return Number(this.envConfig.DATABASE_PORT);
    }

    public get databaseUsername() {
        return this.envConfig.DATABASE_USERNAME;
    }

    public get databasePassword() {
        return this.envConfig.DATABASE_PASSWORD;
    }

    public get databaseName() {
        return this.envConfig.DATABASE_NAME;
    }

}
