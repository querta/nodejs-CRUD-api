import { v4 as uuid } from 'uuid';
import { ICandidate, IUser } from './interfaces';

class UsersDB {
    public users: IUser[] = [];

    constructor() {
        this.users = [];
    }

    async getUsers(): Promise<IUser[]> {
        return this.users;
    }

    async createUser({ name, age, hobbies = [] }: ICandidate) {
        const newUser: IUser = {
            id: uuid(),
            name,
            age,
            hobbies,
        };
        this.users.push(newUser);
    }

    async getUserById(id: string): Promise<IUser> {
        const findedPerson: IUser = this.users.find((user: IUser) => user.id === id) as IUser;
        return findedPerson;
    }

    async deleteUser(id: string): Promise<void> {
        const element: IUser = await this.getUserById(id);
        const index = this.users.indexOf(element);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }

    async updateUser(id: string, { name, age, hobbies }: ICandidate): Promise<void> {
        const user: IUser = await this.getUserById(id);
        user.name = name;
        user.age = age;
        if (hobbies) { user.hobbies = hobbies; }
    }
}

export default new UsersDB();
