import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Query {
    getUser(id: Int!): User
    getUsers: [User]
}

type User {
    id: Int!
    name: String!
    email: String!
    student: Boolean!
}

input UserInput {
    name: String!
    email: String!
    student: Boolean!
}

type Mutation {
    createUser(input: UserInput): User
    updateUser(id: Int!, input: UserInput): User
}
`);

export interface User {
    id: number;
    name: string;
    email: string;
    student: boolean;
}

export interface UserInput {
    name: string;
    email: string;
    student: boolean;
}
