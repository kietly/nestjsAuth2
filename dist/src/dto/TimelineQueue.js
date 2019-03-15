"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimelineQueue {
    constructor(userId) {
        this.userId = userId;
    }
    addToTimeline(timelineObj) {
        if (timelineObj) {
            if (!this._timelineObjects) {
                this._timelineObjects = [timelineObj];
            }
            else {
                this._timelineObjects.push(timelineObj);
            }
        }
    }
    get timelineObjects() {
        return this._timelineObjects;
    }
}
exports.TimelineQueue = TimelineQueue;
//# sourceMappingURL=TimelineQueue.js.map