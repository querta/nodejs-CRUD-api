export interface ICandidate {
    name: string;
    age: number;
    hobbies?: string[];
}

export interface IUser extends ICandidate {
    id: string;
    name: string;
    age: number;
    hobbies?: string[];
}
