import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { AuthService } from "./auth.service";

@Injectable()
export class PermissionGuard implements CanActivate {
    private readonly logger = new Logger(PermissionGuard.name);
    constructor(private readonly reflector: Reflector, private readonly tokenService: AuthService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const permissions: string[] = this.reflector.get<string[]>('permissions', context.getHandler());

        this.logger.log(`Resource is ${context.getClass} and permissions are ${permissions}`);

        if (!permissions){
            throw new UnauthorizedException('No permissions defined for resource. Cannot proceed');
        } else {
            const request = context.switchToHttp().getRequest();
            // Extract the token and get the permissions
            const token: string =  request.header('Authorization');

            const {userClaims} = this.tokenService.validateToken(token);
            const hasPermissions = () => userClaims.claims.some((permission) => permissions.includes(permission));

            return userClaims && hasPermissions();

        }
    }

}
