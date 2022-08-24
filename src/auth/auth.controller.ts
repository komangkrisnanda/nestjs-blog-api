import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Request() req){
        return req.user;
    }

    @Get('profile')
    profile(@Request() req){
        return req.user;
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.authService.registerUser(createUserDto);
    }
}
