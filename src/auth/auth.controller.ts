import { Controller, Get, Logger } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import {join } from 'path';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @Get('/authToken')
    getToken(): string {
        this.logger.log('Generating token');
        const token: string =  this.authService.generateToken();
        return token;
    }
}
