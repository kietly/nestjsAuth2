"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthenticationMiddleware_1;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/auth.service");
let AuthenticationMiddleware = AuthenticationMiddleware_1 = class AuthenticationMiddleware {
    constructor(authService) {
        this.authService = authService;
        this.logger = new common_1.Logger(AuthenticationMiddleware_1.name);
    }
    resolve(...args) {
        return (req, resp, next) => {
            this.logger.log('Validating if auth url');
            if (req.baseUrl.includes('auth/authToken')) {
                next();
            }
            else {
                const token = req.header('Authorization');
                const { userClaims, errMessage } = this.authService.validateToken(token);
                if (userClaims) {
                    this.logger.log(' User is authenticated');
                    next();
                }
                else {
                    throw new common_1.UnauthorizedException(errMessage);
                }
            }
        };
    }
};
AuthenticationMiddleware = AuthenticationMiddleware_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthenticationMiddleware);
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map