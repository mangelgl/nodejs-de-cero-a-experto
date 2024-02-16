import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { FileSystemDataSource } from '../infrastructure/datasource/file-system.datasource';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
)

export class Server {

    static run () {

        console.log('Server running...');

        // const url = 'http://google.es/';
        const url = 'http://localhost:3000/';
        CronService.createJob(
            '*/3 * * * * *',
            () => {
                new CheckService(
                    fileSystemLogRepository,
                    // () => console.log(`${url} is ok`),
                    // ( error ) => console.error( error )
                    undefined,
                    undefined
                ).execute(url);
            }
        );

    }
}