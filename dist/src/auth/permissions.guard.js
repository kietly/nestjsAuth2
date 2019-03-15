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
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_service_1 = require("./auth.service");
let PermissionGuard = class PermissionGuard {
    constructor(reflector, tokenService) {
        this.reflector = reflector;
        this.tokenService = tokenService;
    }
    canActivate(context) {
        const permissions = this.reflector.get('permissions', context.getClass());
        if (!permissions) {
            throw new common_1.UnauthorizedException('No permissions defined for resource. Cannot proceed');
        }
        else {
            const request = context.switchToHttp().getRequest();
            const token = request.header('Authorization');
            const { userClaims } = this.tokenService.validateToken(token);
            const hasPermissions = () => userClaims.claims.some((permission) => permissions.includes(permission));
            return userClaims && hasPermissions();
        }
    }
};
PermissionGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector, auth_service_1.AuthService])
], PermissionGuard);
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permissions.guard.js.map