"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService_1;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path_1 = require("path");
let AuthService = AuthService_1 = class AuthService {
    constructor() {
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    generateToken() {
        this.logger.log('Going to load cert');
        const privateKey = fs.readFileSync(path_1.join(__dirname, '/../private.pem'), 'utf8');
        const signOptions = {
            expiresIn: 3000,
            algorithm: 'RS256',
        };
        const unsignedUserClaims = { uuid: 'abc', claims: ['canViewTimeline', 'canAddToQueue'] };
        const signedToken = jwt.sign(unsignedUserClaims, privateKey, signOptions);
        this.logger.log(`Got signed token ${signedToken}`);
        return signedToken;
    }
    validateToken(signedToken) {
        this.logger.log('Going to validate cert');
        const publicKey = fs.readFileSync(path_1.join(__dirname, '/../public.pem'), 'utf8');
        try {
            let userClaims;
            userClaims = Object.assign(jwt.verify(signedToken, publicKey, { algorithms: ['RS256'] }), userClaims);
            this.logger.log(`Got unsigned token ${JSON.stringify(userClaims)}`);
            return { userClaims };
        }
        catch (err) {
            this.logger.error(`Token is not valid. Error is ${err}`);
            return { errMessage: err.message };
        }
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map