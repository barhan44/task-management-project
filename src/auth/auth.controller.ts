import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { UserData } from './interfaces/user-data.interface';

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
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<UserData> {
    return this.authService.signIn(authCredentialsDto);
  }
}
