import { UserService } from './user.service';
import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { User } from './interface/user';
import { UserDto } from './dto/user.dto';
import { ValidationPipe } from '../validation/validation.pipe';
import { AuthGuard } from '../auth/auth.guard';
import { UserDecorator } from './user.decorator';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    public async getAllUser(): Promise<User[]> {
      try {
        return this.userService.getAll();
      } catch (err) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
    }

    @Post('register')
    @UsePipes(ValidationPipe)
    public async addUser(@Body() user: UserDto): Promise<User> {
      try {
        return this.userService.register(user);
      } catch (err) {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      }
    }

    @Get(':id')
    public async getUserById(@Param('id') id): Promise<User> {
      try {
        return this.userService.getById(id);
      } catch(err) {
        throw new HttpException('Not Found!', HttpStatus.NOT_FOUND);
      }
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    public async updateUser(@Param('id') id, @Body() user: User): Promise<User> {
      return this.userService.update(id, user);
    }

    @Delete(':id')
    public async deleteUser(@Param('id') id): Promise<boolean> {
      return this.userService.remove(id);
    }

    @Post('/login')
    public async login(@Body() user): Promise<User>{
      return this.userService.login(user);
    }

    @Get('auth/whoami')
    @UseGuards(new AuthGuard())
    showMe(@UserDecorator('username') username: string) {
      return this.userService.read(username);
    }
}
