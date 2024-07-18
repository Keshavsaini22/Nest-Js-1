import { Injectable } from '@nestjs/common';

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
            return this.users.filter(user => user.subscription === role);
        }
        return this.users;
    }

    findOne(id: string) {
        return this.users.find(user => user.age === Number(id));
    }

    create(user: { name: string, age: number, email: string, country: string, subscription: string }) {
        this.users.push(user);
        return user;
    }

    update(id: string, updatedUser: { name?: string, age?: number, email?: string, country?: string, subscription?: string }) {
        this.users = this.users.map(user => {
            if (user.age === Number(id)) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: string) {
        this.users = this.users.filter(user => user.age !== Number(id));
        return { deleted: true }
    }
    
}
