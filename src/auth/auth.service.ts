import { Injectable, Logger } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import {join } from 'path';
import { UserClaims } from './userClaims';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    generateToken(){
        // THis is just a dummy token service. When in env we are not responsible for token generation
        this.logger.log('Going to load cert');
        const privateKey: string = fs.readFileSync(join(__dirname, '/../private.pem'), 'utf8');
        interface UnsignedToken {
            uid: string;
            claims: string[];
        }
        const signOptions: jwt.SignOptions = {
            expiresIn: 3000,
            algorithm: 'RS256',
        };


        const unsignedUserClaims: UserClaims = {uuid: 'abc', claims: ['canViewTimelineQueue', 'canAddToQueue']};

        const signedToken: string = jwt.sign(unsignedUserClaims, privateKey, signOptions);
        this.logger.log(`Got signed token ${signedToken}`);
        return signedToken;
    }

    /**
     * Validate a token and return the claims, null if the token is not valid
     * @param signedToken string
     */
    validateToken(signedToken: string): { userClaims?: UserClaims, errMessage?: string} {
        this.logger.log('Going to validate cert');
        const publicKey: string = fs.readFileSync(join(__dirname, '/../public.pem'), 'utf8');
        try {
            let userClaims: UserClaims;
            userClaims = Object.assign(jwt.verify(signedToken, publicKey, {algorithms: ['RS256']}), userClaims)
            this.logger.log(`Got unsigned token ${JSON.stringify(userClaims)}`);
            return {userClaims} ;
        } catch (err) {
            this.logger.error(`Token is not valid. Error is ${err}`);
            return { errMessage: err.message };
        }
    }
}
