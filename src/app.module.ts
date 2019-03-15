import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimelineController } from './timeline/timeline.controller';
import { TimelineModule } from './timeline/timeline.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthenticationMiddleware } from './common/middleware/authentication.middleware';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PermissionGuard } from './auth/permissions.guard';

@Module({
  imports: [TimelineModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer.apply(AuthenticationMiddleware).forRoutes('*').
      apply(AuthenticationMiddleware).exclude('**/authToken');
    consumer.apply(LoggerMiddleware).forRoutes('timeline');
  }

}
