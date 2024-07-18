import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findOne(@Param('id') id: string) {
        // return { id };
        return this.usersService.findOne(id);
    }

    @Post()    //POST /users
    create(@Body() user: any) {
        // return user;
        return this.usersService.create(user);
    }

    @Patch(':id')    //PATCH /users/:id
    update(@Param('id') id: string, @Body() user: {}) {
        // return { id, ...user };
        return this.usersService.update(id, user);
    }

    @Delete(':id')    //DELETE /users/:id
    remove(@Param('id') id: string) {
        // return { id };
        return this.usersService.delete(id);
    }

}
