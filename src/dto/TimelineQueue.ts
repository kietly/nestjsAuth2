import { TimelineObject } from './TimelineObject';

export class TimelineQueue {
    private _timelineObjects: TimelineObject[];

    constructor(public readonly userId: string) {}

    public addToTimeline(timelineObj: TimelineObject){
        if (timelineObj) {
            if (!this._timelineObjects) {
                this._timelineObjects = [timelineObj];
            } else {
                this._timelineObjects.push(timelineObj);
            }
        }
    }

    get timelineObjects(): TimelineObject[] {
        return this._timelineObjects;
    }
}
