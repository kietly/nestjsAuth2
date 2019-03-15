import { TimelineMetadata } from './TimelineMetadata';

export class TimelineObject {
    public isPinned: boolean = true;
    public isCollapsed: boolean = true;

    constructor(public uuid: string, public metadata: TimelineMetadata) {
    }
}
