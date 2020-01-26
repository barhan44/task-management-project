import { Controller, Post, Body, ValidationPipe, Get, UseGuards } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AccessToken } from './interfaces/user-data.interface';
import { UserFullName } from './interfaces/user-full-name.interface';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {
  }

  @Post('/signup')
  async sighUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.sighUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<AccessToken> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/user-full-name')
  @UseGuards(AuthGuard())
  getUserFullName(@GetUser() user: User): Promise<UserFullName> {
    return this.authService.getUserFullName(user.username);
  }
}
