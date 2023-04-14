import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles.decorator';
import { RoleGuard } from './role.guard';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/shared/DTO/user/User.dto';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @ApiBody({ type: UserDTO })
  //TODO dto pour swagger
  @ApiOperation({ summary: "login d'un user" })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @ApiOperation({ summary: 'voir son profil' })
  @UseGuards(AuthGuard, RoleGuard)
  // @Roles('user', 'admin')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
