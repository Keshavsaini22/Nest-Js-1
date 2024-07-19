import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-user-dto';

@Controller('users') //localhost:3000/users
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()    //GET /users  or /users?role=admin
    findAll(@Query('role') role?: 'Standard' | 'Basic' | 'Premium') {
        // if (role) {
        //     return { role: role };
        // }
        // return [];
        return this.usersService.findAll(role);
    }

    // @Get('intern')  // GET /users/intern
    // findAllIntern() {
    //     return { name: 'Intern' };
    // }

    @Get(':id')    //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        // return { id };
        return this.usersService.findOne(id);
    }

    @Post()    //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUsersDto) {
        // return user;
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')    //PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUsersDto) {
        // return { id, ...user };
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')    //DELETE /users/:id
    remove(@Param('id', ParseIntPipe) id: number) {
        // return { id };
        return this.usersService.delete(id);
    }

}
