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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const TimelineQueue_1 = require("../dto/TimelineQueue");
const TimelineObject_1 = require("../dto/TimelineObject");
const TimelineMetadata_1 = require("../dto/TimelineMetadata");
const permissions_guard_1 = require("../auth/permissions.guard");
const permissions_decorator_1 = require("../auth/permissions.decorator");
let TimelineController = class TimelineController {
    getQueue(userId) {
        const timelineQueue = new TimelineQueue_1.TimelineQueue(userId);
        const metadata = new TimelineMetadata_1.TimelineMetadata(new Date(2017, 1, 1), new Date(2017, 12, 31));
        const firstObject = new TimelineObject_1.TimelineObject('UUIDAfterDBSaerch', metadata);
        timelineQueue.addToTimeline(firstObject);
        return timelineQueue;
    }
};
__decorate([
    common_1.Get('/queue/:userId'),
    permissions_decorator_1.Permissions('canViewTimelineQueue', 'isAdmin'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", TimelineQueue_1.TimelineQueue)
], TimelineController.prototype, "getQueue", null);
TimelineController = __decorate([
    common_1.Controller('timeline'),
    common_1.UseGuards(permissions_guard_1.PermissionGuard)
], TimelineController);
exports.TimelineController = TimelineController;
//# sourceMappingURL=timeline.controller.js.map