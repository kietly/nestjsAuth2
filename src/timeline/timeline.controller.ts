import { Controller, Get, Param, Body, Post, UseGuards, ReflectMetadata } from '@nestjs/common';
import { TimelineQueue } from '../dto/TimelineQueue';
import { TimelineObject } from '../dto/TimelineObject';
import { TimelineMetadata } from '../dto/TimelineMetadata';
import { PermissionGuard } from '../auth/permissions.guard';
import { Permissions } from '../auth/permissions.decorator';

@Controller('timeline')
@UseGuards(PermissionGuard)
export class TimelineController {
    @Get('/queue/:userId')
    @Permissions('canViewTimelineQueue', 'isAdmin')
    getQueue(@Param('userId') userId: string): TimelineQueue {
        // Mocking it up for now
        const timelineQueue: TimelineQueue = new TimelineQueue(userId);
        const metadata: TimelineMetadata = new TimelineMetadata(new Date(2017, 1, 1), new Date(2017, 12, 31));
        const firstObject: TimelineObject = new TimelineObject('UUIDAfterDBSaerch', metadata);
        timelineQueue.addToTimeline(firstObject);
        return timelineQueue;
    }

    // @Post()
    // async createCat(@Body() catObj: CatDto) {
    //     return `Your cat with name ${catObj.name} was added`;
    // }
}
