import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') //localhost:3000/users
export class UsersController {

    @Get()    //GET /users  or /users?role=admin
    findAll(@Query('role') role?: 'admin' | 'intern') {
        if (role) {
            return { role: role };
        }
        return [];
    }

    @Get('intern')  // GET /users/intern
    findAllIntern() {
        return { name: 'Intern' };
    }

    @Get(':id')    //GET /users/:id
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post()    //POST /users
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id')    //PATCH /users/:id
    update(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user };
    }

    @Delete(':id')    //DELETE /users/:id
    remove(@Param('id') id: string) {
        return { id };
    }

}
