import {MiddlewareFunction, NestMiddleware, Injectable, Logger} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger: Logger = new Logger(LoggerMiddleware.name);

    resolve(...args: any[]): MiddlewareFunction<any, any, any> {
        return (req: Request, resp, next) => {
            this.logger.log(`Before any actual request for data...`);
            next();
        };
    }
}
