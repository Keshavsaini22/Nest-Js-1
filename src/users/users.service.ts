import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-user-dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "name": "Alice",
            "age": 30,
            "email": "alice@example.com",
            "country": "USA",
            "subscription": "Premium"
        },
        {
            "name": "Bob",
            "age": 25,
            "email": "bob@example.com",
            "country": "Canada",
            "subscription": "Basic"
        },
        {
            "name": "Charlie",
            "age": 35,
            "email": "charlie@example.com",
            "country": "UK",
            "subscription": "Standard"
        },
        {
            "name": "Diana",
            "age": 28,
            "email": "diana@example.com",
            "country": "Australia",
            "subscription": "Premium"
        },
        {
            "name": "Eve",
            "age": 22,
            "email": "eve@example.com",
            "country": "New Zealand",
            "subscription": "Basic"
        }
    ]

    findAll(role?: 'Standard' | 'Basic' | 'Premium') {
        if (role) {
            const rolesArray = this.users.filter(user => user.subscription === role);
            if (rolesArray.length === 0) {
                throw new NotFoundException(`User with role ${role} not found`);
            }
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.age === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    create(user: CreateUsersDto) {
        this.users.push(user);
        return user;
    }

    update(id: number, updatedUser: UpdateUsersDto) {
        this.users = this.users.map(user => {
            if (user.age === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        this.users = this.users.filter(user => user.age !== id);
        return { deleted: true }
    }

}
