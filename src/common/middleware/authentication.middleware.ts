import {MiddlewareFunction, NestMiddleware, Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../../auth/auth.service';
import { Request } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    private readonly logger: Logger = new Logger(AuthenticationMiddleware.name);
    constructor(private readonly authService: AuthService) {}

    resolve(...args: any[]): MiddlewareFunction<any, any, any> {
        return (req: Request, resp, next) => {
            // Verify if the request has a token and is valid
            // this.logger.log(`headers are ` + hdrs.values;
            this.logger.log('Validating if auth url');
            if (req.baseUrl.includes('auth/authToken')) { // if we configured the module right we wouldnt need this
                next();
            } else {
                // this.logger.log(`headers are ${JSON.stringify(req.headers)}`);
                const token: string =  req.header('Authorization');
                const { userClaims, errMessage } = this.authService.validateToken(token);
                if (userClaims) {
                    this.logger.log(' User is authenticated');
                    next();
                } else {
                    throw new UnauthorizedException(errMessage);
                }
            }

        };
    }
}
