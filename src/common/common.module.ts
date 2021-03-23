import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ApiKeyGuard } from './guard/api-key.guard';
import { WarpResponseInterceptor } from './interceptors/warp-response.interceptor';
import { LoginMiddleware } from './middleware/login.middleware';
import { TimeTakenMiddleware } from './middleware/time-taken.middleware';

@Module({
  imports: [ConfigModule],
  providers: [
    { provide: APP_GUARD, useClass: ApiKeyGuard },
    { provide: APP_INTERCEPTOR, useClass: WarpResponseInterceptor },
  ],
})
export class CommonModule implements NestModule {
  configure(consuser: MiddlewareConsumer) {
    consuser.apply(LoginMiddleware).forRoutes('*');
    consuser.apply(TimeTakenMiddleware).forRoutes('*');
  }
}
