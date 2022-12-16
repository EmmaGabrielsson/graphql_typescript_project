import {users} from "./data";
import {User, UserInput} from "./schema";


export const getUser = (args: { id: number }): User | undefined => 
users.find(user => user.id === args.id)

export const getUsers = (): User[] => users;

export const createUser = (args: { input: UserInput}): User => {
const user = {
id: users.length + 1,
...args.input,
}
users.push(user);
return user;
}

export const updateUser = (args: { user: User  }): User => {
const index = users.findIndex(user => user.id === args.user.id);
const targetUser = users[index];

if (targetUser) users[index] = args.user 

return targetUser;
}



