"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const timeline_module_1 = require("./timeline/timeline.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const authentication_middleware_1 = require("./common/middleware/authentication.middleware");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authentication_middleware_1.AuthenticationMiddleware).forRoutes('*').
            apply(authentication_middleware_1.AuthenticationMiddleware).exclude('**/authToken');
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('timeline');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [timeline_module_1.TimelineModule],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService, auth_service_1.AuthService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map