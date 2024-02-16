import fs from 'fs';
import { LogDataSource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


export class FileSystemDataSource implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly lowLogsPath = 'logs/low/';
    private readonly mediumLogsPath = 'logs/medium/';
    private readonly highLogsPath = 'logs/high/';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if ( !fs.existsSync( this.logPath ) ) {
            fs.mkdirSync(this.logPath);
        }

        [
            this.lowLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach( path => {
            if ( !fs.existsSync( path ) ) {
                fs.mkdirSync( path );
                fs.writeFileSync( path + 'logs.log', '' );
            }
        });
        
    }

    async saveLog ( newLog : LogEntity ): Promise<void> {

        const logAsJSON = JSON.stringify(`${newLog}\n`);
        
        fs.appendFileSync( this.lowLogsPath, logAsJSON );

        if ( newLog.level === LogSeverityLevel.low ) return;
        if ( newLog.level === LogSeverityLevel.medium ) {
            fs.appendFileSync( this.mediumLogsPath, logAsJSON );
        } else {
            fs.appendFileSync( this.highLogsPath, logAsJSON );
        }
    }

    getLogs ( severity : LogSeverityLevel ): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }
}