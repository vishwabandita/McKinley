/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
//import {sign} from 'crypto';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() SignUpDto: SignUpDto): Promise<{token: string}>
    {
        return this.authService.signUp(SignUpDto);
    }
}
