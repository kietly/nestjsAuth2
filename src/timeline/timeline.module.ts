import { Module } from '@nestjs/common';
import { TimelineController } from './timeline.controller';
import { PermissionGuard } from '../auth/permissions.guard';
import { AuthService } from '../auth/auth.service';

@Module({
    controllers: [TimelineController],
    providers: [PermissionGuard, AuthService],
  })
export class TimelineModule {}
