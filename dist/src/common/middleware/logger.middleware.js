"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerMiddleware_1;
const common_1 = require("@nestjs/common");
let LoggerMiddleware = LoggerMiddleware_1 = class LoggerMiddleware {
    constructor() {
        this.logger = new common_1.Logger(LoggerMiddleware_1.name);
    }
    resolve(...args) {
        return (req, resp, next) => {
            this.logger.log(`Before any actual request for data...`);
            next();
        };
    }
};
LoggerMiddleware = LoggerMiddleware_1 = __decorate([
    common_1.Injectable()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map