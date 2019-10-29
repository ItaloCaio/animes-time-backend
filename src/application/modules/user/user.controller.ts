import { UserService } from './user.service';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './interface/user';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    public async getAllUser(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Post()
    public async addUser(@Body() user: UserDto): Promise<User> {
      return this.userService.add(user);
    }

    @Get(':id')
    public async getUserById(@Param('id') id): Promise<User> {
      return this.userService.getById(id);
    }

    @Put(':id')
    public async updateUser(@Param('id') id, @Body() user: UserDto): Promise<User> {
    
      return this.userService.update(id, user);
    }

    @Delete(':id')
    public async deleteUser(@Param('id') id): Promise<boolean> {
      return this.userService.remove(id);
    }

}
